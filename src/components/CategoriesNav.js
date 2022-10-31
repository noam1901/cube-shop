import React from 'react'
import {Link} from 'react-router-dom'
import './CategoriesNav.css'
import { CustomLink } from './Navbar'

const CategoriesNav = () => {
  return (
    <div className='categories-nav'>
      <ul>
        <CustomLink to='/2x2' >2x2</CustomLink>
        <CustomLink to='/3x3' >3x3</CustomLink>
        <CustomLink to='/4x4' >4x4</CustomLink>
        <CustomLink to='/5x5' >5x5</CustomLink>
        <CustomLink to='/6x6' >6x6</CustomLink>
        <CustomLink to='/7x7' >7x7</CustomLink>
        <CustomLink to='/lubes' >lubes</CustomLink>
      </ul>        
    </div>
  )
}

export default CategoriesNav