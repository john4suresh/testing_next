"use client";
import { useState } from "react";
import Card from "@/components/shared/card";
import Button from "@/components/shared/button";
import RichTextEditor from "@/components/shared/rich-text-editor";

export default function AddEditNotes() {
  const [notes, setNotes] = useState("");

  return (
    <Card type="recommended" className="my-6">
      <p className="h3 !font-semibold">
        Session 3 | Upcoming — Thursday, September 10th, 2024 @ 12:30 pm
      </p>
      <div className="my-6">
        <RichTextEditor value={notes} setNotes={setNotes} />
      </div>
      <div className="text-right">
        <Button text="Save" />
      </div>
    </Card>
  );
}
