import React, { Component } from 'react';
import "./home.css"
import img0 from "../images/0.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import { Outlet } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='allin'>
          <div className="header">
            <div className="blank_01"></div>
            <div className="searchline">
              <input type="text" className="search" />
            </div>
            <ul className="nav">
              <li><a href="#" className="nav_a">
                热榜<button className="_switch">&nbsp;</button>
              </a></li>
              <li className="blank_02"></li>
              <li><a href="#" className="nav_a">
                提问<button className="_switch">&nbsp;</button>
              </a></li>
            </ul>
          </div>
          
        <Outlet />

        <div className="footerfixed">
          <ul className="footer">
            <li className="_li"><a href="#" className="_a">
              <img src={img0} />
              首页
            </a></li>
            <li className="_li"><a href="#" className="_a">
              <img src={img1} />
              排行榜
            </a></li>
            <li className="_li"><a href="#" className="_a">
              <img src={img2} />
              知识库
            </a></li>
            <li className="_li"><a href="#" className="_a">
              <img src={img3} />
              个人
            </a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home;
