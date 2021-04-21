import React from "react";
import "./login.css"
import { images } from "../../../assets/images.js"
import { Link as RouterLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';


const openLogin = () => {
  document.body.classList.add('login-open');
  document.body.classList.remove('signup-open');
}

const opensignup = () => {
  document.body.classList.add('signup-open');
  document.body.classList.remove('login-open');
}

function Login() {

  return (
    <div className="login-block-wrapper">
      <div className="logo-block">
        <em className="logo"><img src={images.loginLogo.default} alt="" /></em>
      </div>
      <div className="signin-block-wrapper">
        <div className="signin-user" onClick={openLogin}>
          <div className="thumb"><img src={images.userSignin.default} alt="" /></div>
          SIGN IN
        </div>

        <div className="signin-block">
          <h2>Sign IN</h2>
          <div className="form-group">
            <TextField label="Username" fullWidth/>
            {/* <input className="form-control" placeholder="Username" /> */}
          </div>
          <div className="form-group">
            <TextField label="Password" type="password" fullWidth/>
            {/* <input className="form-control" type="password" placeholder="Password" /> */}
          </div>
          <div className="login-btn-block">
            {/* <Link to={`${process.env.PUBLIC_URL}/home`}  className="btn btn-login"></Link> */}
            <Button component={RouterLink} to={`${process.env.PUBLIC_URL}/home`} variant="contained" disableElevation className="btn btn-login">
              </Button>
            <a href="javascript:void(0)" title="Forgot password?" >Forgot password?</a>
          </div>
        </div>

      </div>
      <div className="signup-block-wrapper">
        <div className="signup-user" onClick={opensignup}>
          <div className="thumb"><img src={images.userSignup.default} alt="" /></div>
          SIGN UP
        </div>
        <div className="signup-block">
          <h2>Sign up</h2>
          <div className="form-group">
          <TextField label="Username" fullWidth/>
          </div>
          <div className="form-group">
          <TextField label="Password" type="password" fullWidth/>
          </div>
          <div className="text-left">
            <Button variant="contained" disableElevation className="btn btn-signup">
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
