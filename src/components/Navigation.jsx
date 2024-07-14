import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Navigation() {
    const [selectedTitle, setSelectedTitle] = useState('About Me');
    const handleClick = (title) => {
        setSelectedTitle(title);
      };

    return (
    <nav>
        <ul className="nav-list">
        <li className={selectedTitle === 'About Me' ? 'active' : ''} onClick={() => handleClick('About Me')}><Link to="/">About Me</Link></li>
        <li className={selectedTitle === 'Portfolio' ? 'active' : ''} onClick={() => handleClick('Portfolio')}><Link to="/portfolio">Portfolio</Link></li>
        <li className={selectedTitle === 'Contact' ? 'active' : ''} onClick={() => handleClick('Contact')}><Link to="contact">Contact Me</Link></li>
        <li className={selectedTitle === 'Resume' ? 'active' : ''} onClick={() => handleClick('Resume')}><Link to="/resume">Resume</Link></li>
            <li>
                
            </li>
            <li>
                
            </li>
            <li>

            </li>
            <li>
            </li>
        </ul>
    </nav>
    );
}