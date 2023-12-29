import React from 'react';
import { useAppSelector } from '../app/store';
import { useParams, useHistory } from 'react-router-dom';

const Details = () => {
  const { categoryId } = useParams();
  const history = useHistory();
  const selectedCategory = useAppSelector((state) => state.category.selectedCategory);

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Details</h1>
      <button onClick={handleBackClick}>Back</button>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory.name}</h2>
          {selectedCategory.description && (
            <p>Description: {selectedCategory.description}</p>
          )}
          {selectedCategory.metrics && (
            <p>Metrics: {selectedCategory.metrics}</p>
          )}
          {/* Render other properties if they exist */}
          {/* For example, you can add additional properties here */}
        </div>
      )}
    </div>
  );
};

export default Details;
