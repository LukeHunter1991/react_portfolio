import resume from '../../../public/resume.txt'

export default function ResumePage() {
    return(
        <section id="proficencies">
            <p>Download my{' '} <a href={resume}>resume</a></p>
            <h2>Proficencies</h2>
            <ul className="prof-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>javaScript</li>
                <li>jQuery</li>
                <li>My SQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
            </ul>
        </section>
    )
} 