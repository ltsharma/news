import {
  GET_NEWS_FAIL,
  GET_NEWS_START,
  GET_NEWS_SUCCESS,
} from "../Config/actionTypes";

const getNewsStart = () => ({
  type: GET_NEWS_START,
  payload: null,
});

const getNewsSuccess = (data) => ({
  type: GET_NEWS_SUCCESS,
  payload: data,
});

const getNewsFail = (error) => ({
  type: GET_NEWS_FAIL,
  payload: error,
});

export const getNews = () => async (dispatch) => {
  dispatch(getNewsStart());
  try {
    const result = await fetch(
      "http://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "apiKey=8e9c7e2c9cd44349916fa386d7f4137c"
    );
    const data = await result.json();
    dispatch(getNewsSuccess(data?.articles));
  } catch (e) {
    dispatch(getNewsFail(e));
  }
};
