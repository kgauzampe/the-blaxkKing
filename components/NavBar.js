import Link from "next/link";


export default function Navbar() {
  return (
    <header>
      <section>
        <Link href="/">
          <a id="logo">
            <img className="navbar-logo" src="/img/ISLANDER LOGO 2018.png" alt="" />
          </a>
        </Link>

        <label htmlFor="toggle-1" className="toggle-menu">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </label>

        <input type="checkbox" id="toggle-1" />

        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/production">
                <a>Production</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>

            <li>
              <Link href="">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}
