import logo from '../react.svg';

export default function NavBar() {
  return (
    <header>
      <nav>
        <img src={logo} alt="react logo" className="header-logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
