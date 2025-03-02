import logo from './assets/react.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="React Logo" class="logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>Content</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
