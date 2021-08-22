const initialState = {
  categories: {
    activeCategory: '',
    categoryList: [],
  },
  products: [],
};

const categoryList = [
  {
    id: 1,
    name: 'food',
    description: 'delicious food for you to feast on',
  },
  {
    id: 2,
    name: 'games',
    description: 'games to waste your life on',
  },
];
const productList = [
  {
    id: 1,
    name: 'burger',
    category: 'food',
    inStock: 72,
    price: 50,
  },
  {
    id: 2,
    name: 'pizza',
    category: 'food',
    inStock: 120,
    price: 1,
  },
  {
    id: 3,
    name: 'Witcher 3 Wild Hunt',
    category: 'games',
    inStock: 90,
    price: 25,
  },
  {
    id: 4,
    name: "Assassin's Creed Black Flag",
    category: 'games',
    inStock: 45,
    price: 17,
  },
];

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_CATEGORY':
      return {
        categories: { ...state.categories, categoryList },
        products: state.products,
      };

    case 'SELECT_CATEGORY':
      return {
        categories: { ...state.categories, activeCategory: payload },
        products: productList.filter((prod) => prod.category === payload),
      };

    default:
      return state;
  }
};

export const loadCategory = () => {
  return {
    type: 'LOAD_CATEGORY',
  };
};

export const handleCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  };
};

export default productReducer;
