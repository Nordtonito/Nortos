import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Main = ({decrement, increment, value}) => {

  return (
  <div className="container">
    <h1 className="basic-class">Welcome to Nortos</h1>
    <div>
      <button className="btn btn-primary mr-3" onClick={decrement}>
        -
      </button>
      <span>{ value }</span>
      <button className="btn btn-primary ml-3" onClick={increment}>
        +
      </button>
    </div>
  </div>
)
};

Main.propTypes = {
  value: PropTypes.object.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (state);

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INC' }),
  decrement: () => dispatch({ type: 'DEC' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
