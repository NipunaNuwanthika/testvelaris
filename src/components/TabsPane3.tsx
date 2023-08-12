import React from "react";
import CommentSection from "./CommentSection";
import avatarImg from "../assets/image.png";

const TabsPane3: React.FC = () => {
  return (
    <div className="tabs-pane">
      <CommentSection
        username="Alma Andrews"
        subText="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        commonParagraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident."
        avatarImg={avatarImg}
      />
    </div>
  );
};

export default TabsPane3;
