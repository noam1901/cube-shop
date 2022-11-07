import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import './Home.css'
import { Ad } from '../Ad';

const contentStyle = {
  // background: 'url("../imgs/ad1.webp")',
  // backgroundSize: 'cover',
  width: '100%',
};

const Home = () => {
  const [ads,setAds] = useState([])
  useEffect(
    ()=>{
      setAds([{
        src: 'https://www.gancube.com/wp-content/uploads/2021/09/Lark20210924-212043.jpg'
      },{
        src: 'https://www.gancube.com/wp-content/uploads/2021/09/Lark20210924-212043.jpg'
      },{
        src: 'https://www.gancube.com/wp-content/uploads/2021/09/Lark20210924-212043.jpg'
      }])
    }
  ,[])
  // onClick: direct to product page
  return (
    <div>
      <Carousel autoplay>
        {
          ads.map(ad => {return <Ad src={ad.src} style={contentStyle}></Ad>})
        }
      </Carousel>
      <div className='popular-products'>
        <div className='popular-title'>
          <span>Popular's</span>
        </div>
        <div className='products-container'>
          {/* {make products Component} */}
        </div>
      </div>
    </div>
  )
}

export default Home