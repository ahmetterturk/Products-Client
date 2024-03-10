const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS': {
      return {
        ...state,
        products: action.data,
      };
    }
    case 'SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.data,
      };
    }
    case 'ADD_PRODUCT': {
      const newProduct = state.products.products ? [...state.products.products] : [...state.products]
      return {
        ...state,
        products: [action.newProduct, ...newProduct ],
      };
    }
    case 'UPDATE_PRODUCT': {
      const updatedProducts = state.products.products ? [...state.products.products] : [...state.products]
      const index = updatedProducts.findIndex((product) => product.id === action.updatedProduct.id);
      if (index !== -1) {
        updatedProducts.splice(index, 1, action.updatedProduct); 
      }
      return {
        ...state,
        products: updatedProducts,
      };
    }
    case 'GET_USERS': {
      return {
        ...state,
        users: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
