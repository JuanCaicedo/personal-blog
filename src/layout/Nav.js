import React from 'react'
import Link from 'gatsby-link'

const NavLink = ({ to, external, children, className = '' }) => {
  return external ? (
    <a href={to} className={`mr-3 ${className}`}>
      {children}
    </a>
  ) : (
    <Link to={to} className={`mr-3 ${className}`}>
      {children}
    </Link>
  )
}

const Nav = () => (
  <header className="w-full">
    <nav className="py-3 flex mx-auto max-w-3xl px-8 md:px-0">
      <NavLink to="/" className="flex-1">
        Hola!
      </NavLink>
      <NavLink to="/garden/now">Now</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/garden">Garden</NavLink>
    </nav>
  </header>
)
export default Nav
