import React, { Component, Fragment } from 'react';
import "./hots.css"
// import { Link } from 'react-router-dom';
import img from '../../images/OIP-C.png';

class Hots extends Component {

  state = {
    whatsHot: ['为什么 如何评价 为什么 如何评价 为什么 如何评价 为什么 如何评价 为什么 如何评价', '为什么 如何评价 为什么 如何评价', '为什么 如何评价 为什么 如何评价', '', '', '', '', '', '']
  }

  render() {
    return (
      <Fragment>
        <div className="blankblock"></div>
        <div className="main">
          {
            this.state.whatsHot.map((item, index) => {
              return (
                <div className='hots_box' id="index">
                  <img src={img} className='hots_img' />
                  <span className="hots_username">蒙古上单</span>
                  <div className="hots_text">{item}</div>
                  <div className='reactions'>
                    <span className='comment'>114511评论</span>
                    <span className='pot'> · </span>
                    <span className='great'>114511赞同</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default Hots;