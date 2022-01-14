import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./register.css";
import next_img from "../../assets/images/next.png";

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
      skip("/home")
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
        <div className="register_input_layout" >
          <input
            placeholder={'ID/学号'}
            onChange={(e) => setId(e.target.value)}
            value={id}
            className='register_id register_input'
          />
          <br />
          <input
            placeholder={'昵称'}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className='register_username register_input'
          />
          <br />
          <input
            type={"password"}
            placeholder={'填写密码'}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className='register_password register_input'
          />
          <br />
          <input
            type={"password"}
            placeholder={'确认密码'}
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
            className='register_confirm register_input'
          />
        </div>
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
