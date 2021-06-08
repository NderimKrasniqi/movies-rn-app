import dataApi from '../api/data';
import * as actionType from '../actionTypes';

export const getData = () => async (dispatch) => {
  dispatch({ type: actionType.GET_DATA_REQUEST });

  try {
    const response = await dataApi.getTrending();
    const filter = response.data.results.filter(
      (item) => item.media_type !== 'person'
    );

    dispatch({
      type: actionType.GET_DATA_SUCCESS,
      payload: filter,
    });
  } catch (error) {
    dispatch({ type: actionType.GET_DATA_FAIL, payload: error });
    console.log(error);
  }
};
