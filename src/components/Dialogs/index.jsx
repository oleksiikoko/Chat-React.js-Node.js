import React from "react";
import orderBy from "lodash/orderBy";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desk"]).map(item => (
      <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
