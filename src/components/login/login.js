import axios from "axios";
import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import img from "../../assets/images/iknow.png";
import "./login.css";
import FormButton from "../../assets/reused_components/form_submit_button/form_submit_button";
import FormInput from "../../assets/reused_components/form_input/form_input";

export default function Login() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  let skip = useNavigate();

  let handleId = function (e) {
    setId(e.target.value);
  }

  let handlePassword = function (e) {
    setPassword(e.target.value);
  }

  let handleCilck = function () {
    axios({
      method: "post",
      url: "http://175.24.166.140:8080/login",
      data: {
        id: id,
        password: password,
      }
    }).then(response => {
      if (response.msg === "login successfully") {
        skip("/home");
      }
      else {
        alert("error!!!");
      }
    })
  }

  return (
    <div className="login_bk">
      <div className="login_viewport">
        <div className="login_logo">
          <img src={img} className="login_img" />
          <h1
            className="h1_login"
          >i know</h1>
        </div>
        <div style={{ height: "10%" }}></div>
        <div className="login_input_container">
          <FormInput type={"text"} placeholder={"ID"} bindFunc={handleId} value={id}/>
          <br />
          <FormInput type={"password"} placeholder={"输入密码"} bindFunc={handlePassword} value={password}/>
        </div>
        <div className="login_skip_to">
          <Link to="/forget" className="switchForget login_switch"
          >忘记密码</Link>
          <Link to="/register" className="switchRegister login_switch"
          >用户注册</Link>
        </div>
        <div style={{ height: "10%" }}></div>
        <FormButton bindFunc={handleCilck} value={"登录"}/>
      </div >
    </div>
  )
}
