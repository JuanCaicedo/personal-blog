import Link from 'next/link'

const NavLink = ({ href, children, className }) => (
  <Link href={href}>
    <a className={`link dib mr3 ${className}`}>{children}</a>
  </Link>
)

const Nav = () => (
  <header className="bg-red fixed w-100 z-1 ">
    <style jsx>{`
      nav :global(a) {
        color: #f4f4f4;
      }
    `}</style>
    <nav className="f6-m fw6-m ttu tracked mw-100 mw8-ns center pv3 ph4 flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/now">Now</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink
        href="https://github.com/juancaicedo/personal-blog"
        className="ml-auto"
      >
        Fork on GitHub
      </NavLink>
    </nav>
  </header>
)
export default Nav
