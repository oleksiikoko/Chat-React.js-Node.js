import React, { useEffect } from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";

// class Dialog extends React.Component {
//   componentDidUpdate(prevProps) {
//     const { fetchMessages, currentDialogId } = this.props;
//     if (prevProps.currentDialogId !== this.props.currentDialogId) {
//       fetchMessages(currentDialogId);
//     }
//   }

//   render() {
//     const { items } = this.props;
//     return <BaseMessages items={items} />;
//   }
// }

const Dialog = ({ currentDialogId, fetchMessages, items }) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  return <BaseMessages items={items} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items
  }),
  messagesActions
)(Dialog);
