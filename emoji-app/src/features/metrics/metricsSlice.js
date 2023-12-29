import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: [],
  selectedCategory: null,
  categoryDetails: null,
  loading: false,
  error: null,
};


export const fetchCategoryDetails = createAsyncThunk(
  'metrics/fetchCategoryDetails',
  async (categoryId) => {
    try {
      const response = await axios.get(`https://emojihub.herokuapp.com/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearCategoryDetails: (state) => {
      state.categoryDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetails = action.payload;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { selectCategory, clearCategoryDetails } = metricsSlice.actions;

export default metricsSlice.reducer;
