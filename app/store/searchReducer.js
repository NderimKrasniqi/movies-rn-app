import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_CLEAR,
} from './actionTypes';

const initialState = {
  searched: [],
  loadingSearch: false,
  errorSearch: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        loadingSearch: true,
      };

    case SEARCH_SUCCESS:
      return {
        ...state,
        loadingSearch: false,
        searched: action.payload,
      };

    case SEARCH_FAIL:
      return {
        ...state,
        loadingSearch: false,
        errorSearch: action.payload,
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        searched: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
