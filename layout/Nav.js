import Link from 'next/link';

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <a className="link dib mr3">{children}</a>
  </Link>
);

const Nav = () => (
  <header className="bg-red fixed w-100 z-1 ">
    <style jsx>{`
      nav :global(a) {
        color: #f4f4f4;
      }
    `}</style>
    <nav className="f6 fw6 ttu tracked mw-100 mw8-ns center pv3 ph4">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/now">Now</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </nav>
  </header>
);
export default Nav;
