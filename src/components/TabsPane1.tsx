import React from "react";
import CommentSection from "./CommentSection";
import PaginationBar from "./PaginationBar";

const TabsPane1: React.FC = () => {
  return (
    <div className="tabs-pane">
      <CommentSection />
      <CommentSection />
      <CommentSection />
      <PaginationBar />
    </div>
  );
};

export default TabsPane1;
