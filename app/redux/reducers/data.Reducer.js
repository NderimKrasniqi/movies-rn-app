import * as actionType from '../actionTypes';

const initialState = {
  data: {},
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_DATA_REQUEST:
      return { loading: true };

    case actionType.GET_DATA_SUCCESS:
      return { loading: false, data: action.payload };

    case actionType.GET_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
