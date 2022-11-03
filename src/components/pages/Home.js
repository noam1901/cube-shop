import React from 'react'
import { Carousel } from 'antd';
import './Home.css'

const contentStyle = {
  // background: 'url("../imgs/ad1.webp")',
  // backgroundSize: 'cover',
  width: '100%'
};

const Home = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img src='../imgs/ad1.jpg' style={contentStyle}></img>
        </div>
        <div>
          <img src='../imgs/ad1.jpg' style={contentStyle}></img>
        </div>
        <div>
          <img src='../imgs/ad1.jpg' style={contentStyle}></img>
        </div>
      </Carousel>
    </div>
  )
}

export default Home