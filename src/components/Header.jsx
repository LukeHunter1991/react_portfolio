import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>Luke Hunter 🤷‍♂️</h1>
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/">About Me</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact Me</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
