import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";
import next_img from "../../assets/images/next.png";
import FormInput from "../../assets/reused_components/form_input/form_input";

export default function Register() {

  const skip = useNavigate();

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");



  function handleClick() {
    if (checkForm()) {
      ;
    }
    else {
      //发送请求
      //
      skip("/bind_email")
    }
  }

  function checkForm() {
    let flag = 0;

    return flag;
  }

  return (
    <div className="register_bk">
      <h1 className='register_header'>新用户注册</h1>
      <div className="register_layout">
        <div className="register_input_layout">
          <FormInput
            type={"text"}
            placeholder={"ID/学号"}
            bindFunc={e => setId(e.target.value)}
            value={id}
          />
          <br />
          <FormInput
            type={"text"}
            placeholder={"昵称"}
            bindFunc={(e) => setUsername(e.target.value)}
            value={username}
          />
          <br />
          <FormInput
            type={"password"}
            placeholder={"填写密码"}
            bindFunc={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <FormInput
            type={"password"}
            placeholder={"确认密码"}
            bindFunc={(e) => setConfirm(e.target.value)}
            value={confirm}
          />
        </div>
        <br/>
        <img src={next_img}
          className="register_next"
          onClick={
            handleClick
          }
        />
      </div>
    </div>
  )
}
