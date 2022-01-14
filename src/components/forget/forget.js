import axios from 'axios';
import { useState } from 'react';
import "./forget.css"
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormButton from '../../assets/reused_components/form_submit_button';
import { withStyles } from '@material-ui/core/styles';

export default function Forget() {

  // const FormButton = withStyles({
  //   root: {
  //     background: 'rgb(144,173,255)',
  //     borderRadius: 3,
  //     border: 0,
  //     color: '#000',
  //     height: '4.5rem',
  //     width:'15.5rem',
  //     boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  //     fontSize:'2rem',
  //     fontWeight: 'bold',
  //     borderRadius:'2.25rem',
  //     boxSizing: 'border-box',
  //     '&:hover': {
  //       background: 'rgb(144,173,255)',
  //     },
  //   },
  //   label: {
  //     textTransform: 'capitalize',
  //   },
  // })(Button);

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
    if (e.target.className == "forget_id") {
      setbindedMail({
        username: e.target.value,
        email: temp.email
      })
    }
    if (e.target.className == "forget_input") {
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
    <div class='forget_bk'>
      <h1 className='forget_header'>找回密码</h1>
      <div className='forget_layout'>
        <div>
          <input
            placeholder='请输入用户名'
            className="forget_id"
            value={bindedMail.username}
            onChange={handleInput}
          />
          <br /><br />
          <input
            placeholder='请输入绑定的邮箱'
            className='forget_input'
            value={bindedMail.email}
            onChange={handleInput}
          />
        </div>
        {/* <FormButton>提交</FormButton> */}
        <FormButton text={"提交"} bindFunc={handleFind}/>
      </div>
    </div>
  )
}
