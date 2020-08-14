import {
  LIST_CATEGORIES,
  SAVE_CATEGORY,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  EDIT_CATEGORY
} from "../actions/category";

const initialState = {
  categories: {},
  selectedCategory: null,
  fetchedCategory: null
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_CATEGORIES:
      const payloadReducer = (all, current) => ({ ...all, [current.id]: current });
      const foundCategories = action.payload.reduce(payloadReducer, {});
      return { ...state, categories: foundCategories };

    case SAVE_CATEGORY:
      const newCategories = {
        ...state.categories,
        [action.payload.id]: action.payload
      };
      return { ...state, categories: newCategories };

    case DELETE_CATEGORY:
      const { [action.payload]: deleted, ...otherCategories } = state.categories;
      return { ...state, categories: { ...otherCategories } };

    case FETCH_CATEGORY:
      return { ...state, fetchedCategory: action.payload };

    case UPDATE_CATEGORY:
      return { 
        ...state, 
        categories: {
          ...state.categories, 
          [action.payload.id]: action.payload
        },
        selectedCategory: null
      };

    case EDIT_CATEGORY:
      return { ...state, selectedCategory: action.payload };

    default:
      return state;
  }
}
