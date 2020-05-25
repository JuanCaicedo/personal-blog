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
  <header className="bg-red-600 fixed w-full z-10">
    <style jsx>{`
      nav :global(a) {
        color: #f4f4f4;
      }
    `}</style>
    <nav className="py-3 flex mx-auto max-w-3xl px-8 md:px-0">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/now">Now</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink
        to="https://github.com/juancaicedo/personal-blog"
        className="ml-auto"
        external
      >
        Fork on GitHub
      </NavLink>
    </nav>
  </header>
)
export default Nav
