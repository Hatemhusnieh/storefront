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
    description: 'Delicious food for you to feast on',
  },
  {
    id: 2,
    name: 'games',
    description: 'Games to waste your life on',
  },
];
const productList = [
  {
    id: 1,
    name: 'burger',
    img: 'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
    category: 'food',
    inStock: 72,
    price: 50,
  },
  {
    id: 2,
    name: 'pizza',
    img: 'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x500.jpg',
    category: 'food',
    inStock: 120,
    price: 1,
  },
  {
    id: 3,
    name: 'Witcher 3 Wild Hunt',
    img: 'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png?w=440',
    category: 'games',
    inStock: 90,
    price: 25,
  },
  {
    id: 4,
    name: "Assassin's Creed Black Flag",
    img: 'https://cdn-products.eneba.com/resized-products/vqv03fmtmnvnvlolm6b5_350x200_1x-0.jpg',
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
