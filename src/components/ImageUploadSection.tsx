import React from "react";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

const { Dragger } = Upload;

interface ImageUploadSectionProps {
  headerText: string;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  headerText,
}) => {
  const props: UploadProps = {
    name: "file",
    multiple: true,
    action: "https://www.test.com/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="image-upload-section">
      <h2 className="image-header">{headerText}</h2>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from <br />
          uploading company data or other banned files.
        </p>
      </Dragger>
    </div>
  );
};

export default ImageUploadSection;
