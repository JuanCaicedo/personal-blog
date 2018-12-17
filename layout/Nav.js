import Link from 'next/link'

const NavLink = ({ href, children, className = '' }) => (
  <Link href={href}>
    <a className={`mr-3 ${className}`}>{children}</a>
  </Link>
)

const Nav = () => (
  <header className="bg-red fixed w-full z-10">
    <style jsx>{`
      nav :global(a) {
        color: #f4f4f4;
      }
    `}</style>
    <nav className="text-base sm:text-2xl py-3 px-8 flex container mx-auto">
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
