import React from 'react'
import {Link} from 'react-router-dom'
import './CategoriesNav.css'

const CategoriesNav = () => {
  return (
    <div className='categories-nav'>
        <Link to='/' >2x2</Link>
        <Link to='/' >3x3</Link>
        <Link to='/' >4x4</Link>
        <Link to='/' >5x5</Link>
        <Link to='/' >6x6</Link>
        <Link to='/' >7x7</Link> 
    </div>
  )
}

export default CategoriesNav