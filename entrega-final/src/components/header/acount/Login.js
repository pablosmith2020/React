import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
  const [login, setlogin] = useState({
    user: "",
    pass: "",
  });

  const [inputStyle, setinputStyle] = useState({ borderColor: "#ced4da" });

  const HandlePressBotton = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setlogin((preValue) => {
      if (name === "user") {
        return {
          user: value,
          pass: preValue.pass,
        };
      } else if (name === "pass") {
        return {
          user: preValue.user,
          pass: value,
        };
      }
    });
    //console.log(login.user);
  };

  console.log({ inputStyle });

  const validateLogin = (event) => {
    if (login.user === "") {
      setinputStyle({ inputStyle: "red" });
      ////////////////////////////////////////////////////////////////Ver porque no renderiza cuando cambio el objeto
      console.log({ inputStyle });

      alert("Vacio");
    }
  };

  return (
    <div className="col-md-6">
      <form className="login-box" method="post">
        <div className="row margin-bottom-1x">
          <div className="col-xl-4 col-md-6 col-sm-4">
            {/*            
<MyFacebookLoginButton></MyFacebookLoginButton> */}

            <FacebookLoginButton
              onClick={HandlePressBotton}
              className="btn btn-sm btn-block twitter-btn"
            >
              <span className="btn-sm">Facebook</span>
            </FacebookLoginButton>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-4">
            <TwitterLoginButton onClick={HandlePressBotton}>
              <span className="btn-sm">Twitter</span>
            </TwitterLoginButton>

            {/* <a className="btn btn-sm btn-block twitter-btn" href="/#">
              <i className="socicon-twitter"></i>&nbsp;Twitter login
            </a> */}
          </div>
          <div className="col-xl-4 col-md-6 col-sm-4">
            <GoogleLoginButton onClick={HandlePressBotton}>
              <span className="btn-sm">Google</span>
            </GoogleLoginButton>

            {/*  <a className="btn btn-sm btn-block google-btn" href="/#">
              <i className="socicon-googleplus"></i>&nbsp;Google+ login
            </a> */}
          </div>
        </div>
        <h4 className="margin-bottom-1x">
          O Utilizando el Siguiente Formulario
        </h4>

        <div className="form-group input-group">
          <input
            name="user"
            className="form-control"
            style={inputStyle}
            type="email"
            placeholder="Email"
            onChange={HandlePressBotton}
            //value={login.user}
            required=""
          ></input>
        </div>

        <div className="form-group input-group">
          <input
            name="pass"
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={HandlePressBotton}
            //value={login.pass}
            required=""
          ></input>
        </div>

        <div className="d-flex flex-wrap justify-content-between padding-bottom-1x">
          <div>
            <Checkbox
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <label>Recordar Credenciales</label>
          </div>

          {/*  <div className="custom-control custom-checkbox">
           
            <label className="custom-control-label" >
              Recordar Credenciales
            </label>
          </div> */}

          <Link to="RecoveryPassword">
            <i className="navi-link">Recordar Password</i>
          </Link>
        </div>
        <div className="text-center text-sm-right">
          <button
            id="btnUserLogin"
            className="btn btn-primary margin-bottom-none"
            type="button"
            onClick={validateLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
