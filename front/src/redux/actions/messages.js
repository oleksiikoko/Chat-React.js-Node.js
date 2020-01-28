import { messagesApi } from "utils/api";

const actions = {
  setMessages: items => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  setIsLoading: isLoading => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: isLoading
  }),
  fetchMessages: dialogId => dispatch => {
    dispatch(actions.setIsLoading(true));
    messagesApi
      .getAllByDialogId(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessages(data));
      })
      .catch(actions.setIsLoading(false));
  }
};

export default actions;
