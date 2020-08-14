import { EXECUTE_OMNI_SEARCH } from "../actions/search";

const initialState = {
  result: null
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case EXECUTE_OMNI_SEARCH:
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
