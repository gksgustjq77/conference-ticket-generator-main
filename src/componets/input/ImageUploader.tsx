import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  title?: string;
  formKey: string;
  onChange?: (file: File, formKey: string) => void;
}
const descriptionObj = {
  info: "Upload your photo (JPG or PNG, max size : 500kB.",
  error: "Fail your photo (JPG or PNG, max size : 500kB.",
};

const borderImage =
  "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%236b6f88' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e";
const ImageUploader: React.FC<ImageUploaderProps> = ({
  title,
  formKey,
  onChange,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const [description, setDescription] = useState<string>(descriptionObj.info);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file.size > 500 * 1024) {
      setDescription(descriptionObj.error);
      return;
    }
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        typeof reader.result === "string" &&
          localStorage.setItem("fileData", reader.result || "");
      };
      reader.readAsDataURL(file);
      onChange?.(file, formKey);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md">
        {title && <p className="mb-2 text-md font-medium">{title}</p>}
        <div
          {...getRootProps()}
          style={{
            backgroundImage: `url("${borderImage}")`,
          }}
          className="w-full flex flex-col h-36 rounded-lg flex items-center justify-center cursor-pointer transition duration-200 hover:border-blue-500"
        >
          <input {...getInputProps()} />
          {preview ? (
            <>
              <img
                src={preview}
                alt="Preview"
                className="h-[50%] rounded-[10px] object-contain mb-[10px]"
              />
              <div className="flex gap-[5px]">
                <div className="rounded-[5px] p-[5px] bg-[hsl(245,19%,35%)] text-sm">
                  Remove Image
                </div>
                <div className="rounded-[5px] p-[5px] bg-[hsl(245,19%,35%)]">
                  Change Image
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center flex-col gap-[15px]">
              <div className="bg-[hsl(245,19%,35%)] rounded-[10px] p-[10px] border border-[hsl(245,15%,58%)]">
                <img src="/images/icon-upload.svg"></img>
              </div>
              <p className="text-gray-500">Drag and drop or click to upload</p>
            </div>
          )}
        </div>
        {description && (
          <div className="flex items-center justify-flex-center mt-2">
            {/* <img src="/images/icon-info.svg" color="red"></img> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke={
                  description === descriptionObj.error
                    ? "hsl(7,71%,60%)"
                    : "#D1D0D5"
                }
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
              <path
                stroke={
                  description === descriptionObj.error
                    ? "hsl(7,71%,60%)"
                    : "#D1D0D5"
                }
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>
            <p
              className={`text-xs ml-2 ${
                description === descriptionObj.error
                  ? "text-[hsl(7,71%,60%)]"
                  : "text-gray-500"
              }`}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
