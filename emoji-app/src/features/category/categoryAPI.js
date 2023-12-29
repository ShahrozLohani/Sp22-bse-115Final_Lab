// src/api/categoryAPI.js

const BASE_URL = 'GET https://emojihub.yurace.pro/api/all/category'; // Replace with your actual API base URL

export const fetchCategoriesAPI = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data; // Assuming the API response contains an array of categories
  } catch (error) {
    throw new Error(`Error fetching categories: ${error.message}`);
  }
};

export const fetchCategoryDetailsAPI = async (categoryId) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category details');
    }
    const data = await response.json();
    return data; // Assuming the API response contains details of a specific category
  } catch (error) {
    throw new Error(`Error fetching category details: ${error.message}`);
  }
};
