import React from "react";
import { Steps } from "antd";
import FormSection from "./FormSection";

interface OnboardUserProps {
  headerText: string;
}

const OnboardUser: React.FC<OnboardUserProps> = ({ headerText }) => {
  return (
    <div className="onboard-user">
      <h2 className="onboard-header">{headerText}</h2>
      <Steps
        className="steps-com"
        size="small"
        current={1}
        items={[
          {
            title: "Add user",
          },
          {
            title: "Assign roles",
          },
          {
            title: "Review & confirm",
          },
        ]}
      />
      <FormSection />
    </div>
  );
};

export default OnboardUser;
