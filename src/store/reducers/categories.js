const initialState = {
  activeCategory: '',
  categoryList: [],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_CATEGORY':
      return { ...state, categoryList: payload };
    // change payload to payload.category
    case 'SELECT_CATEGORY':
      return { ...state, activeCategory: payload };

    default:
      return state;
  }
};

export default categoriesReducer;
