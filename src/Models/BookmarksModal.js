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
    case actionTypes.SAVE_BOOKMARK_START:
      return {
        ...state,
        loading: true,
        error: initialState.error,
      };

    case actionTypes.SAVE_BOOKMARK_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case actionTypes.SAVE_BOOKMARK_FAIL:
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
