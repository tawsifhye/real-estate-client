import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Login.css";
import { useState } from "react";
const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    handleGoogleSignIn, handleRegistration, processLogin, isLogin, handleEmailChange, handleNameChange, handlePasswordChange, toggleLogin, user, error, handleResetPassword } = useAuth();
  const emailPasswdAuth = (e) => {
    handleRegistration(location, history)
    e.preventDefault();
  }
  const googleSignIn = () => {
    handleGoogleSignIn(location, history)
  }


  return (
    <>
      <Header />
      <div className="form-container d-flex justify-content-center align-items-center my-5">
        <div className="mx-5 my-2">
          <form className="container" onSubmit={emailPasswdAuth}>
            <h3 className="text-primary">
              Please {isLogin ? "Login" : "Register"}
            </h3>
            <div className="row mb-3">
              <label
                htmlFor="inputEmail3"
                className="col-sm-2 col-form-label me-2"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  required
                />
              </div>
              {!isLogin && (<div>
                <label
                  htmlFor="input"
                  className="col-sm-2 col-form-label me-2"
                >
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    onBlur={handleNameChange}
                    type="text"
                    className="form-control"
                    id="inputEmail3"
                    required
                  />
                </div>
              </div>)
              }
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label me-2"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered?
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary me-2">
              {isLogin ? "Login" : "Register"}
            </button>
            <button
              onClick={handleResetPassword}
              type="button"
              className="btn btn-secondary btn-sm"
            >
              Reset Password
            </button>
          </form>
          <br />
          <div>
            <hr className="w-100" />
          </div>
          <button
            className="btn btn-success p-2 fw-bold fs-5"
            onClick={googleSignIn}
          >
            <span className="pe-2 text-white">
              <FontAwesomeIcon icon={faGoogle} />
            </span>
            Google Sign In
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
