import axios from 'axios';
import React, { Component } from 'react';
import "./forget.css"
import { Link } from 'react-router-dom';

class Forget extends Component {

  state = {
    bindedMail: '',
  }

  render() {
    return (
      <div class="background02">
        <h1 className='forgetHeader'>找回密码</h1>
        <input
          placeholder='   请填写已绑定邮箱'
          className='forget_input'
          value={this.state.bindedMail}
          onChange={this.handleMail.bind(this)}
        />
        <button className='submitForget' onClick={this.handleFind.bind(this)}>提交</button>
      </div>
    )
  }

  handleMail(e) {
    this.setState({
      bindedMail: e.target.value,
    })
  }

  handleFind(){
    axios()
  }

}

export default Forget;
