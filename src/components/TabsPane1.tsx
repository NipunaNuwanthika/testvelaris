import React from "react";
import CommentSection from "./CommentSection";
import PaginationBar from "./PaginationBar";
import avatarImg from "../assets/avatar.png";
import avatarImg1 from "../assets/image3.png";
import avatarImg2 from "../assets/image.png";

const TabsPane1: React.FC = () => {
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
      <CommentSection
        username="Nelson Richards"
        subText="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        commonParagraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident."
        avatarImg={avatarImg1}
      />
      <CommentSection
        username="Stella Reid"
        subText="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        commonParagraph="At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident."
        avatarImg={avatarImg2}
      />
      <PaginationBar />
    </div>
  );
};

export default TabsPane1;
