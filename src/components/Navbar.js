import React from 'react'
import './Navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const Navbar = () => {
    const loggedIn = true
  return (
    <div className='nav'>
       <Link to='/' className='site-title'>Cube Shop</Link>
       <ul>
            <CustomLink to={!loggedIn? '/Login': '/Cart'}>{!loggedIn? 'Login': 'Cart'}</CustomLink> 
            <CustomLink to={!loggedIn? '/Register' : '/Profile'}>{!loggedIn? 'Register': 'Profile'}</CustomLink>
        </ul> 
    </div>
  )
}

export function CustomLink({to, children, ...props}){
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