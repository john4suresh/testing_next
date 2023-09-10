"use client";
import Image from "next/image";
import React, { useCallback, useMemo } from "react";
import isHotkey from "is-hotkey";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";
import bold from "@/public/assets/icons/bold.svg";
import italic from "@/public/assets/icons/italic.svg";
import underline from "@/public/assets/icons/underline.svg";
import code from "@/public/assets/icons/code.svg";
import headingOne from "@/public/assets/icons/heading-one.svg";
import headingTwo from "@/public/assets/icons/heading-two.svg";
import blockQuote from "@/public/assets/icons/block-quote.svg";
import numberedList from "@/public/assets/icons/numbered-list.svg";
import bulletedList from "@/public/assets/icons/bulleted-list.svg";
import left from "@/public/assets/icons/left.svg";
import center from "@/public/assets/icons/center.svg";
import right from "@/public/assets/icons/right.svg";
import justify from "@/public/assets/icons/justify.svg";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const initialValue = [
  {
    type: "",
    children: [{ text: "" }],
  },
];

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  let newProperties;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) {
    return false;
  }

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align };
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} className="list-disc" {...attributes}>
          {children}
        </ul>
      );
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      );
    case "list-item":
      return (
        <li style={style} className="ml-5" {...attributes}>
          {children}
        </li>
      );
    case "numbered-list":
      return (
        <ol style={style} className="list-decimal" {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <button
      className={
        isBlockActive(
          editor,
          format,
          TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
        )
          ? "bg-white"
          : "bg-gray-thin opacity-30"
      }
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      <Image
        src={icon}
        alt={format}
        width={20}
        height={20}
        className="h-5 w-5"
      />
    </button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <button
      className={
        isMarkActive(editor, format)
          ? format === "bold"
            ? "rounded-tl-sm bg-white"
            : "bg-white"
          : "bg-gray-thin opacity-30"
      }
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Image
        src={icon}
        alt={format}
        width={20}
        height={20}
        className="h-5 w-5"
      />
    </button>
  );
};

const RichTextEditor = ({ value, setNotes }) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const onHandleChange = (value) => {
    const isAstChange = editor.operations.some(
      (op) => "set_selection" !== op.type
    );
    if (isAstChange) {
      const content = JSON.stringify(value);
      setNotes(content);
    }
  };
  return (
    <Slate
      editor={editor}
      value={value}
      initialValue={initialValue}
      onChange={onHandleChange}
    >
      <div className="rounded-sm border border-gray-medium ">
        <ul className="rounded-t-sm border-b border-gray-medium bg-gray-thin [&>*]:p-4">
          <MarkButton format="bold" icon={bold} />
          <MarkButton format="italic" icon={italic} />
          <MarkButton format="underline" icon={underline} />
          <MarkButton format="code" icon={code} />
          <BlockButton format="heading-one" icon={headingOne} />
          <BlockButton format="heading-two" icon={headingTwo} />
          <BlockButton format="block-quote" icon={blockQuote} />
          <BlockButton format="numbered-list" icon={numberedList} />
          <BlockButton format="bulleted-list" icon={bulletedList} />
          <BlockButton format="left" icon={left} />
          <BlockButton format="center" icon={center} />
          <BlockButton format="right" icon={right} />
          <BlockButton format="justify" icon={justify} />
        </ul>
        <Editable
          style={{
            outline: "none",
            minHeight: 65,
            padding: "0 12px 12px",
            marginTop: "12px",
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Answer..."
          spellCheck
          autoFocus
          onKeyDown={(event) => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
        />
      </div>
    </Slate>
  );
};

export default RichTextEditor;
