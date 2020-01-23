import React from "react";
import classNames from "classnames";

import "./DialogItem.scss";

import { Time, IconReaded } from "../";

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src="https://live.staticflickr.com/2693/4111117620_2945c576c4_z.jpg"
        alt=""
      />
    );
  } else {
    //make
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar(
        "https://live.staticflickr.com/2693/4111117620_2945c576c4_z.jpg"
      )}
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>Real text for my massanjager</p>
        <IconReaded isMe={true} isReaded={false} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 9 && "+9"}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
