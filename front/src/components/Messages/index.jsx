import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";

import { Message } from "../";

const Messages = ({ items }) => {
  console.log(items);
  return items ? (
    <div>
      {items.map(item => (
        <Message key={item._id} {...item} />
      ))}
    </div>
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Choose dialog" />
  );
};

Messages.propTypes = {
  items: PropTypes.array
};

export default Messages;
