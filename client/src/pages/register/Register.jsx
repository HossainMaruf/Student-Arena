import "./register.css";
import { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value != password.current.value) {
      //password.current.setCustomValidity("Password don't match");
      console.log("Not Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        const res = await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
       <div class="container RegisterContainer">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
             <div class="col-md-4 text-center company__info">
        <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
        <h4 class="company_title"><img src={PF + "pust.png"}/></h4>
      </div>
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-5">Student Arena</h5>
            <form onSubmit={handleClick}>

              <div class="form-floating mb-3">
                <input type="text" ref={username} class="form-control" minLength="1" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" ref={email} required class="form-control" id="floatingInputEmail" placeholder="name@example.com"/>
                <label for="floatingInputEmail">Email address</label>
              </div>

              <hr/>

              <div class="form-floating mb-3">
                <input type="password" ref={password} minLength="6" required class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="password" ref={passwordAgain} minLength="6" required class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password"/>
                <label for="floatingPasswordConfirm">Confirm Password</label>
              </div>

              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Sign Up</button>
              </div>

              <span>Have an account? <Link class="text-center mt-2 small" to="/login">Sign In</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
