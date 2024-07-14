import reactLogo from '../assets/react.png'
import LinkedIn from '../assets/LinkedIn.png'
import github from '../assets/github.png'

function Footer() {
    return (
        <footer className="footer">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://linkedin.com/in/luke-hunter-bb78b62ab" target="_blank">
          <img src={LinkedIn} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/LukeHunter1991/" target="_blank">
          <img src={github} className="logo" alt="GitHub logo" />
        </a>
        </footer>
    )
}

export default Footer
