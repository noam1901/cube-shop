import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
       <Link to='/' className='site-title'>Cube Shop</Link>
       <ul>
                <CustomLink to='/categories'>Categories</CustomLink> 
                {/* need to be a dropdown menu */}
                <CustomLink to='/products'>products</CustomLink>
        </ul> 
    </div>
  )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive  ? 'active': ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar