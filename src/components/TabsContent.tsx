import React from "react";
import { Tabs } from "antd";
import TabsPane1 from "./TabsPane1";
import TabsPane2 from "./TabsPane2";
import TabsPane3 from "./TabsPane3";

const { TabPane } = Tabs;

const TabsContent: React.FC = () => {
  return (
    <Tabs className="tabs">
      <TabPane tab="Converstation" key="1">
        <TabsPane1 />
      </TabPane>
      <TabPane tab="Files" key="2">
        <TabsPane2 />
      </TabPane>
      <TabPane tab="Notes" key="3">
        <TabsPane3 />
      </TabPane>
    </Tabs>
  );
};

export default TabsContent;
