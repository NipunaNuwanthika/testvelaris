import React, { useState } from "react";
import { Button } from "antd";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import avatarImg from "../assets/avatar.png";

const CommentSection: React.FC = () => {
  const [likeClicked, setLikeClicked] = useState(false);
  const [starClicked, setStarClicked] = useState(false);

  const handleLikeClick = () => {
    setLikeClicked(!likeClicked);
  };

  const handleStarClick = () => {
    setStarClicked(!starClicked);
  };

  return (
    <div className="comment-section">
      <div className="user">
        <img width={32} height={32} src={avatarImg} alt="avatar" />
        <div className="user-details">
          <span className="username">Alma Andrews</span>
          <p className="sub-text">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
          <p className="common-paragraph">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
          <div className="btn-row">
            <div className="user-button">
              <Button type="primary" ghost>
                Reply
              </Button>
            </div>
            <div className="user-icons">
              <Button
                type="text"
                className={likeClicked ? "clickedlike" : ""}
                onClick={handleLikeClick}
              >
                <LikeOutlined /> 10
              </Button>
              <span className="icon"></span>
              <Button
                type="text"
                className={starClicked ? "clickedstar" : ""}
                onClick={handleStarClick}
              >
                <StarOutlined /> 10
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
