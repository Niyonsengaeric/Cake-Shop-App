import React, { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cake - {props.numberOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
