import React from 'react';
import { reduce } from 'underscore';
import metaDummyData from './DummyData/product_metaData_example.js';

const FitBar = (props) => {
  const fillerWidth = (props.maxRatingWidth) * 100;

  const containerStyles = {
    height: 20,
    width: '75%',
    backgroundColor: '#e0e0de',
    borderRadius: 25,
    margin: 4,

  };

  const fillerStyles = {
    height: '100%',
    width: `${fillerWidth}%`,
    backgroundColor: '#eead0e',
    borderRadius: 'inherit',
    textAlign: 'center',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.rating}`}</span>
      </div>
    </div>
  );
};

export default FitBar;
