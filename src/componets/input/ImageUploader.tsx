import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploaderProps {
  title?: string;
  description?: string;
}
const borderImage =
  "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%236b6f88' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='8' stroke-linecap='square'/%3e%3c/svg%3e";
const ImageUploader: React.FC<ImageUploaderProps> = ({
  title,
  description,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
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
            <img src="/images/icon-info.svg"></img>
            <p className="text-xs text-gray-500 ml-2">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
