const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.data,
      };
    }

    default:
      return state;
  }
};

export default reducer;
