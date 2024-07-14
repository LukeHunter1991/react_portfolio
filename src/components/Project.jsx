
export default function Project(props) {

    
    return (
    <div className="portfolio-piece">
            <h3>{props.title}</h3>
            <a href={props.weblink} className="screenshot">.
                <img src={props.source} alt="" className="portfolio-image" />
            </a>
            <div>
                <a href={props.weblink} className="link">weblink</a>
                <a href={props.github} className="link">github repo</a>
            </div>
        </div>
    )
}
