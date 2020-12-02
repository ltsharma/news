import moment from "moment";
import { deleteData, insert, search } from "expo-sqlite-query-helper";

import {
  SAVE_BOOKMARK_FAIL,
  SAVE_BOOKMARK_START,
  SAVE_BOOKMARK_SUCCESS,
} from "../Config/actionTypes";

const changeBookmarkStart = () => ({
  type: SAVE_BOOKMARK_START,
  payload: null,
});

const changeBookmarkSuccess = (data) => ({
  type: SAVE_BOOKMARK_SUCCESS,
  payload: data,
});

const changeBookmarkFail = (error) => ({
  type: SAVE_BOOKMARK_FAIL,
  payload: error,
});

export const getAllBookmarks = (error) => async (dispatch) => {
  dispatch(changeBookmarkStart());
  const result = await search("bookmarks");
  const data = await result.rows._array.map(({ jsonData, ...data }) => ({
    ...JSON.parse(jsonData),
    ...data,
  }));
  dispatch(changeBookmarkSuccess(data));
};

export const addToBookmark = (item) => async (dispatch) => {
  dispatch(changeBookmarkStart());
  try {
    await insert("bookmarks", [
      {
        jsonData: JSON.stringify(item),
        created: moment().format("lll"),
        uniqueId: `${item.publishedAt}`,
      },
    ]);
    const result = await search("bookmarks");
    const data = await result.rows._array.map(({ jsonData, ...data }) => ({
      ...JSON.parse(jsonData),
      ...data,
    }));
    dispatch(changeBookmarkSuccess(data));
  } catch (e) {
    dispatch(changeBookmarkFail(e));
  }
};

export const removeBookmark = (item, clearAll = false) => async (dispatch) => {
  dispatch(changeBookmarkStart());
  try {
    await deleteData(
      "bookmarks",
      clearAll ? null : { uniqueId: item.publishedAt }
    );
    const result = await search("bookmarks");
    const data = await result.rows._array.map(({ jsonData, ...data }) => ({
      ...JSON.parse(jsonData),
      ...data,
    }));
    console.log(data);
    dispatch(changeBookmarkSuccess(data));
  } catch (e) {
    changeBookmarkFail(e);
  }
};
