import React, { useState, Fragment } from 'react';
import axios from 'axios';
import "./hots.css"
import { Link } from 'react-router-dom';
import img from '../../../assets/images/OIP-C.png';

export default function Hots() {
  //onload 时使用
  function request() {
    axios({
      method: "get",
      url: "http://175.24.166.140:8080/hot",
    }).then(res => {
      res.hot.map((item) => {
        let temp = whatsHot.slice([0, whatsHot.length]);
        temp.push(item)
        setHots(temp);
      })
    })
  }

  // request();
  const [whatsHot, setHots] = useState([{
    username: 'lukrisum',
    text: '南无啊弥陀佛',
    comments: 1,
    greats: 1
  }]);

  return (
    <Fragment>
      <div className="blankblock"></div>
      <div className="main">
        {
          whatsHot.map((item, index) => {
            return (
              <div key={index}>
                <Link to='/comment_section' className='to_comments_section'>
                  <div className='hots_box' id="index">
                    <img src={img} className='hots_img' />
                    <span className="hots_username">{item.username}</span>
                    <div className="hots_text">{item.text}</div>
                    <div className='reactions'>
                      <span className='comment'>{item.comments}评论</span>
                      <span className='pot'> · </span>
                      <span className='great'>{item.greats}点赞</span>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </Fragment>
  )
}
