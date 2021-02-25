import { createSlice } from '@reduxjs/toolkit';

export const searchDataSlice = createSlice({
  name: 'searchData',
  initialState: {
    data: [],
    filteredData: []
  },
  reducers: {
    getData: (state, { payload }) => {
      state.data = payload
      state.filteredData = payload
    },
    search: (state, { payload })  => {
      if (payload.length) {
        state.filteredData = state.data.filter(data => {
          return data.name.toLowerCase().substr(0, payload.length).includes(payload.toLowerCase());
        })
      } else {
        state.filteredData = state.data
      }
    }
  },
});

export const selectFilteredData = state => state.searchDataSlice.filteredData;

export const { getData, search } = searchDataSlice.actions;

export default searchDataSlice.reducer;
