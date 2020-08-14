import { TOGGLE_DRAWER_MENU } from "../actions/navigation";

const initialState = { open: false };

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER_MENU:
      return { ...state, open: action.payload };
    
    default:
      return state;
  }
}