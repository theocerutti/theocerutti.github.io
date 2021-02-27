import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const githubReposSlice = createSlice({
  name: "githubRepos",
  initialState: {
    repos: [],
    hasErrors: false,
    errorMessage: "",
    loading: true
  },
  reducers: {
    getRepos: state => {
      state.loading = true;
      state.hasErrors = false;
    },
    getReposSucess: (state, { payload }) => {
      state.repos = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getReposFailure: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = true;
      state.errorMessage = payload;
    }
  },
});

export const { search, getRepos, getReposFailure, getReposSucess } = githubReposSlice.actions;

export const fetchRepos = createAsyncThunk(
  "repos/fetchMyRepos",
  (_, thunkAPI) => {
    thunkAPI.dispatch(getRepos());

    axios.get("https://api.github.com/users/theocerutti/repos").then(res => {
      console.log(res);
      thunkAPI.dispatch(getReposSucess(res.data));
    }).catch(err => {
      thunkAPI.dispatch(getReposFailure(err));
    });
  }
);

export const selectGithubReposValues = state => state.githubReposSlice;

export default githubReposSlice.reducer;
