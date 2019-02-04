import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateLoginForm,
  loginSite,
  clearLoginForm
} from "../../../store/actions";

const LoginForm = props => {
  const handleChange = e => {
    props.updateLoginForm(e);
  };
  const clearForm = e => {
    e.preventDefault();
    props.clearLoginForm();
  };
  const submitForm = e => {
    e.preventDefault();
    props.loginSite();
  };
  return (
    <form className="login__form" onSubmit={submitForm}>
      <h2>Please Login</h2>
      <input
        type="text"
        name="loginUsername"
        value={props.loginUsername}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        type="text"
        name="loginPassword"
        value={props.loginPassword}
        placeholder="Password"
        onChange={handleChange}
      />
      <button stype="submit">Login</button>
      <button type="button" onClick={clearForm}>
        Clear
      </button>
    </form>
  );
};

LoginForm.propTypes = {
  loginUsername: PropTypes.string,
  loginPassword: PropTypes.string
};

const mapStateToProps = state => ({
  loginUsername: state.loginReducer.loginUsername,
  loginPassword: state.loginReducer.loginPassword
});

const mapActionsToProps = {
  updateLoginForm,
  loginSite,
  clearLoginForm
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LoginForm);