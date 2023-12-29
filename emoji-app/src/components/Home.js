import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/store';
import { Link } from 'react-router-dom';
import { fetchCategoryDetails } from '../features/category/categorySlice'; // Add the appropriate import

const Home = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);

  const handleCategoryClick = (categoryId) => {
    dispatch(fetchCategoryDetails(categoryId));
  };

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/details/${category.id}`} onClick={() => handleCategoryClick(category.id)}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
