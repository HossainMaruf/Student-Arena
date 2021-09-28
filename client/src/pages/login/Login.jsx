import {useRef, useContext} from 'react';
import './login.css';
import {loginCall} from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import {CircularProgress} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

export default function Login() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const email = useRef();
    const password = useRef();
    const {user, isFetching, error, dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }
    // console.log(user);
    return (
      <>
          <div class="container-fluid">
    <div class="row main-content text-center">
      <div class="col-md-4 text-center company__info">
        <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        <h4 class="company_title"><img src={PF + "pust.png"}/></h4>
      </div>
      <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
        <div class="container-fluid">
          <div class="row">
            <h2>Student Arena</h2>
          </div>
          <div class="row">
            <form control="" class="form-group" onSubmit={handleClick}>
              <div class="row">
                <input type="email" ref={email} required name="email" id="email" class="form__input" placeholder="Email"/>
              </div>
              <div class="row">
                {/*<span class="fa fa-lock"></span>*/}
                <input type="password" ref={password} required minLength="6" name="password" id="password" class="form__input" placeholder="Password"/>
              </div>
              {/*<div class="row">
                <input type="checkbox" name="remember_me" id="remember_me" class=""/>
                <label for="remember_me">Remember Me!</label>
              </div>*/}
              <div class="row">
                <button disabled={isFetching} type="submit" class="btn">
                  {isFetching ? <Spinner animation="border" variant="dark" /> : "Log In"}
                </button>
              </div>
            </form>
          </div>
          <div class="row">
            <p>Don't have an account? <Link to="/register">{isFetching ? "" : "Register"}</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
    );
}
