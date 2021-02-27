import { configureStore } from "@reduxjs/toolkit";
import githubReposReducer from "../slices/githubReposSlice";
import searchDataReducer from "../slices/searchDataSlice";

export default configureStore({
  reducer: {
    githubReposSlice: githubReposReducer,
    searchDataSlice: searchDataReducer
  },
});
