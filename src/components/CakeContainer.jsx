import React, { useState } from 'react';

// Store
import { connect } from 'react-redux';
import { buyCake } from '../redux';

const CakeContainer = ({ numOfCakes, buyCake }) => {
  const [inputVal, setInputVal] = useState('');
  const getVal = e => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <h1>Number of cakes {numOfCakes}</h1>
      <input placeholder='How many cakes do you want to buy' type='number' onChange={getVal} />
      <button onClick={() => buyCake(inputVal)}>Buy many cakes</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: num => dispatch(buyCake(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
