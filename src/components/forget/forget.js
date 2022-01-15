import axios from 'axios';
import { useState } from 'react';
import "./forget.css"
import { useNavigate } from 'react-router-dom';
import FormButton from '../../assets/reused_components/form_submit_button/form_submit_button';
import FormInput from '../../assets/reused_components/form_input/form_input';

export default function Forget() {

  const skip = useNavigate();

  const [bindedMail, setbindedMail] = useState({
    username: "",
    email: ""
  });

  function handleInput(e) {
    let temp = {
      username: bindedMail.username,
      email: bindedMail.email
    }
    if (e.target.id == "forget_id") {
      setbindedMail({
        username: e.target.value,
        email: temp.email
      })
    }
    if (e.target.id == "forget_input") {
      setbindedMail({
        username: temp.username,
        email: e.target.value
      })
    }
  }

  function handleFind() {
    skip("/newpassword")
    // axios.put('http://175.24.166.140:8080/forget', {

    // })
  }

  return (
    <div className='forget_bk'>
      <h1 className='forget_header'>找回密码</h1>
      <div className='forget_layout'>
        <div>
          <FormInput
            placeholder='请输入用户名'
            value={bindedMail.username}
            bindFunc={handleInput}
            id={"forget_id"}
          />
          <br /><br />
          <FormInput
            placeholder='请输入绑定的邮箱'
            value={bindedMail.email}
            bindFunc={handleInput}
            id={"forget_input"}
          />
        </div>
        <FormButton value={"提交"} bindFunc={handleFind} />
      </div>
    </div>
  )
}
