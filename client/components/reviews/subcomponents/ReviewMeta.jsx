import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingStar from './RatingStar.jsx';
import RatingsBar from './RatingsBar.jsx';
import FitBar from './FitBar.jsx';

const getAverageRating = ({ ratings }) => {
  const keys = Object.keys(ratings);
  const values = Object.values(ratings);

  let count = 0;
  let accumulator = 0;

  for (let i = 0; i < keys.length; i++) {
    count += keys[i] * values[i];
    accumulator += (+values[i]);
  }
  return Number((count / accumulator).toFixed(1));
};

const getAverageRecommendation = ({ recommended }) => {
  const totalRecommendations = (Object.values(recommended)).reduce((a, b) => (Number(a) + Number(b)));
  return (((recommended.true / totalRecommendations) * 100).toFixed(0));
};

const cloneObject = ({ ratings }) => {
  const completeRatingObject = {
    5: '0', 4: '0', 3: '0', 2: '0', 1: '0',
  };
  return Object.assign(completeRatingObject, ratings);
};

const maxWidth = ({ ratings }) => {
  const values = Object.values(ratings);
  return Math.max(...values);
};

const ReviewMeta = (
  {
    metaDummyData,
    colorScheme,
  },
) => {
  const averageRating = getAverageRating(metaDummyData);
  const averageRecommendation = getAverageRecommendation(metaDummyData);
  const clonedRatingObject = cloneObject(metaDummyData);
  const maxRatingWidth = maxWidth(metaDummyData);

  return (
    <div>
      <h1>RATINGS AND REVIEWS</h1>
      <MetaHeader className="review-Meta">
        <span>
          {averageRating}
&nbsp;
        </span>
      </MetaHeader>
      <RatingStar
        rating={averageRating}
      />
      <br />
      {averageRecommendation}
      % of reviews recommended this product
      <br />
      <br />
      {(Object.entries(clonedRatingObject).reverse().map(([key, value], i) => (
        <div
          key={i}
        >
          {key}
          &nbsp;Stars
          <RatingsBar
            rating={value}
            maxRatingWidth={value / maxRatingWidth}
            colorScheme={colorScheme}
          />
        </div>
      )))}
      <br />
      Size
      <br />
      {metaDummyData.characteristics.Fit !== undefined && metaDummyData.characteristics.Fit !== null
        ? (
          <FitBar
            data={metaDummyData.characteristics.Fit}
            value="Fit"
            colorScheme={colorScheme}
          />
        )
        : 'No reviews yet! ᶘ ◕ᴥ◕ᶅ'}
      <br />
      Comfort
      <br />
      {metaDummyData.characteristics.Comfort !== undefined && metaDummyData.characteristics.Comfort !== null
        ? (
          <FitBar
            data={metaDummyData.characteristics.Comfort}
            value="Comfort"
            colorScheme={colorScheme}
          />
        )
        : 'No reviews yet! (ง ͠° ͟ل͜ ͡°)ง'}
      <br />
    </div>
  );
};

ReviewMeta.propTypes = {
  // ratings: PropTypes.object.isRequired,
  // recommended: PropTypes.object.isRequired,
  // metaDummyData: PropTypes.array.isRequired,
};

const MetaHeader = styled.div`
  flex-direction:row;
  font-size: 30px;
  `;

export default ReviewMeta;
