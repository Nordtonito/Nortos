import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { registerAction } from '../actions';

class Account extends React.Component {
  onRegistration = (event) => {
    event.preventDefault();
    const { register } = this.props;

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    register({
      login,
      password,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Registration & login</h1>
        <form className="registration">
          <input id="login" type="text" />
          <input id="password" type="password" />
          <button onClick={this.onRegistration}>Submit</button>
        </form>
      </div>
    );
  }
}

Account.propTypes = {
  register: PropTypes.func.isRequired,
  users: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(registerAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
