import React from "react";
import { ConfigProvider } from "antd";
import "./styles/App.scss";
import Header from "./components/Header";
import TabsContent from "./components/TabsContent";
import OnboardUser from "./components/OnboardUser";
import ImageUploadSection from "./components/ImageUploadSection";

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6f6af8",
          borderRadius: 5,
          fontSize: 16,
          colorBgContainer: "#fff",
        },
      }}
    >
      <div className="app">
        <Header welcomeText="Welcome" />
        <div className="columns">
          <div className="left-column">
            <TabsContent />
          </div>
          <div className="right-column">
            <div>
              <OnboardUser headerText="Onboard new user" />
            </div>
            <div>
              <ImageUploadSection headerText="Upload cover image" />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
