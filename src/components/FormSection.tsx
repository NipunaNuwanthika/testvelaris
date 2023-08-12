import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const FormSection: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;
  return (
    <div className="form-section">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
      >
        <Form.Item label="Role" name="layout">
          <Radio.Group value={formLayout}>
            <Radio.Button value="horizontal">User</Radio.Button>
            <Radio.Button value="horizontal">Editor</Radio.Button>
            <Radio.Button value="horizontal">Admin</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Remarks">
          <Input placeholder="Add remarks" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Add User</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSection;
