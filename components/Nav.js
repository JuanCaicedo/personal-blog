import React from 'react'
import Link from 'next/link'

const NavLink = ({ to, external, children, className = '' }) => {
  const link = external ? <a href={to}>{children}</a> : <Link href={to}>{children}</Link>

  return <div className={`mr-3 ${className}`}>{link}</div>
}

const Nav = () => (
  <header className="w-full">
    <nav className="py-3 flex mx-auto max-w-3xl px-8 md:px-0">
      <NavLink to="/" className="flex-1">
        Hola!
      </NavLink>
      <NavLink to="/now">Now</NavLink>
    </nav>
  </header>
)

export default Nav
