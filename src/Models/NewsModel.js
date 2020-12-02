import * as actionTypes from "./../Config/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: {
    status: false,
    msg: null,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_NEWS_START:
      return {
        ...state,
        loading: true,
        error: initialState.error,
      };

    case actionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case actionTypes.GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          msg: payload,
        },
      };

    default:
      return state;
  }
};
