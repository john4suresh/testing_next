import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import cloudIcon from "@/public/assets/icons/cloud-upload.svg";
import { bytesToSize } from "@/lib/utils";

function Dropzone({ maxFiles = 1, setFilesData }) {
  const onDrop = useCallback((acceptedFiles) => {
    setFilesData(acceptedFiles);
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: maxFiles,
    onDrop,
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {bytesToSize(file.size)}
    </li>
  ));

  return (
    <>
      <div
        {...getRootProps({
          className: cn(
            {
              "!border-blue-light !border-2": isFocused,
              "!border-green-dark !border-2": isDragAccept,
              "!border-red !border-2": isDragReject,
            },
            "dark:hover:bg-bray-800 mt-6 flex w-full cursor-pointer flex-col items-center justify-center rounded-[4px] border border-dashed border-grayMedium bg-gray-50 py-3 hover:bg-gray-100 focus-visible:border-blue-light focus-visible:outline-none focus-visible:ring-blue-light dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          ),
        })}
      >
        <div>
          <input {...getInputProps()} multiple={maxFiles > 1} />
          <div className="flex flex-row items-center justify-center px-4">
            <Image src={cloudIcon} alt="" className="mr-4" />
            <p className="text-gray-dark">
              Drag and drop your files here, or{" "}
              <span className="link !font-normal underline">browse</span>.
            </p>
          </div>
        </div>
      </div>
      {acceptedFileItems?.length > 0 && (
        <>
          <p className="body pt-4 !font-semibold">Files:</p>
          <ul>{acceptedFileItems}</ul>
        </>
      )}
    </>
  );
}

export default Dropzone;
