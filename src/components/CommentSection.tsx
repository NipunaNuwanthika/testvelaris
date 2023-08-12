import React, { useState } from "react";
import { Button } from "antd";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";
import avatarImg from "../assets/avatar.png";

interface CommentSectionProps {
  username: string;
  subText: string;
  commonParagraph: string;
  avatarImg: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  username,
  subText,
  commonParagraph,
  avatarImg,
}) => {
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
          <span className="username">{username}</span>
          <p className="sub-text">{subText}</p>
          <p className="common-paragraph">{commonParagraph}</p>
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
