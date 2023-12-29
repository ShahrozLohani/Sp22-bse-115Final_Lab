
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategoriesAPI, fetchCategoryDetailsAPI } from '../../api/categoryAPI';
import { setCategories, setSelectedCategory } from '../categorySlice';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  const response = await fetchCategoriesAPI(); // Implement this function to fetch categories
  return response.data;
});

export const fetchCategoryDetails = createAsyncThunk(
  'category/fetchCategoryDetails',
  async (categoryId) => {
    const response = await fetchCategoryDetailsAPI(categoryId); // Implement this function to fetch details
    return response.data;
  }
);
// Implement categoryAPI functions to interact with the provided API
