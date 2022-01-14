import React, { useState } from 'react';
import "./home.css"
import img0 from "../../assets/images/0.png";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import { Outlet } from 'react-router-dom';

export default function Home() {

  const [display, setDisplay] = useState({
    display_0: "",
    display_1: "none"
  })

  function handleSwitch(e) {
    if (e.target.className == "nav_a first") {
      setDisplay({
        display_0: "",
        display_1: "none"
      })
    }
    if (e.target.className == "nav_a second") {
      setDisplay({
        display_0: "none",
        display_1: ""
      })    
    }
  }

  return (
    <div className='allin'>
      <div className="header">
        <div className="blank_01"></div>
        <div className="searchline">
          <input type="text" className="search" />
        </div>
        <ul className="nav">
          <li onClick={handleSwitch}><a href="#" className="nav_a first">
            热榜<button className="_switch" style={{ display: display.display_0 }}>&nbsp;</button>
          </a></li>
          <li className="blank_02"></li>
          <li onClick={handleSwitch}><a href="#" className="nav_a second">
            提问<button className="_switch" style={{ display: display.display_1 }}>&nbsp;</button>
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
