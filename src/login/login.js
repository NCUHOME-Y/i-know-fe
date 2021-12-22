import axios from 'axios';
import React, { Component } from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
import img from "../images/iknow.png";

class Login extends Component {
  state = {
    username: '',
    password: '',
    id: '',
    skip: '',
    flag: 0,
    sign: "",
    color: { color: "" }
  }
  render() {
    return (
      <div className='login_bk'>
        <div className='login_viewport'>
          <div className='login_logo'>
            <img src={img} className='login_img' />
            <h1
              className='h1_login'
            >i know</h1>
          </div>
          <div style={{ height: '10%' }}></div>
          <div className="login_input_container">
            <input
              placeholder='ID'
              onChange={this.handleId.bind(this)}
              value={this.state.id}
              className='login_input login_input_id'
            />
            <input
              type='password'
              placeholder='输入密码'
              onChange={this.handlePassword.bind(this)}
              value={this.state.password}
              className='login_input login_input_password'
            />
          </div>

          <div className="login_skip_to">
            <Link to="/forget" className='switchForget login_switch'
              onTouchStart={this.handleSetSign.bind(this)}
              onTouchEnd={this.handleRmSign.bind(this)}
            >忘记密码</Link>

            <Link to="/register" className='switchRegister login_switch'
              onTouchStart={this.handleSetSign.bind(this)}
              onTouchEnd={this.handleRmSign.bind(this)}
            >用户注册</Link>
          </div>
          <div style={{ height: '10%' }}></div>
          <Link
            onTouchEnd={this.handleCilck.bind(this)}
            className='login_btn'
            to={this.state.skip}
          >
            登录
          </Link>

        </div >
      </div>
    )
  }

  handleId(e) {
    this.setState({
      id: e.target.value,
    })
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }

  handleSetSign(e) {
    e.target.style.color = '#90adff';
  }

  handleRmSign(e) {
    e.target.style.color = 'black';
  }

  handleCilck() {
    axios.post('http://175.24.166.140/login', {
      id: parseInt(this.state.id),
      password: this.state.password,
    })
      .then(response => {
        if (response.data.msg === "login successfully") {
          this.setState({
            skip: "/home",
            flag: 1
          })
        }
      }
      )
  }
}

export default Login;
