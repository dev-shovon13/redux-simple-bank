const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + parseFloat(action.payload);
    case "WITHDRAW":
      return state - parseFloat(action.payload);
    default:
      return state;
  }
};
export default counterReducer;
