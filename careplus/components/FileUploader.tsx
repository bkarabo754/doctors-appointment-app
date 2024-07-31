import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { convertFileToUrl } from "@/lib/utils";
import { Input } from "./ui/input";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};
// FileUploader component for uploading files using react-dropzone
const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className='file-upload'>
      {/* Hidden input field for file selection */}
      <Input {...getInputProps()} />
      {files && files?.length > 0 ? (
        // Display the uploaded image if files are present
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          alt='uploaded image'
          className='max-h-[400px] overflow-hidden object-cover'
        />
      ) : (
        // Display the upload prompt if no files are present
        <>
          <Image
            src='/assets/icons/upload.svg'
            width={40}
            height={40}
            alt='upload'
          />
          <div className='file-upload_label'>
            <p className='text-14-regular'>
              <span className='text-orange-500'>Click to upload </span>
              or drag and drop
            </p>
            <p className='text-12-regular'>
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
