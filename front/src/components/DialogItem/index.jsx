import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded, Avatar } from "../";

const getMessageTime = created_at => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "MM.dd.yyyy");
  }
};

const DialogItem = ({
  _id,
  user,
  unreaded,
  created_at,
  text,
  isMe,
  currentDialogId,
  onSelect
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
      "dialogs__item--selected": currentDialogId === _id
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(new Date(created_at))}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
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
