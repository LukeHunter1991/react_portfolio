import Project from '../Project'

const projectDetails = [ {
    source: './images/Weather_Dashboard.png',
    title: 'Weather Dashboard',
    weblink: "https://lukehunter1991.github.io/weather_dashboard/",
    github: "https://github.com/LukeHunter1991/weather_dashboard"
},
{
    source: './images/IMS.png',
    title: 'Inventory Management System',
    weblink: "https://inventory-management-system-pioa.onrender.com/",
    github: "https://github.com/LukeHunter1991/Inventory_Management_System"
},
{
    source: './images/NoteTaker.png',
    title: 'Note Taker',
    weblink: "https://note-taker-q434.onrender.com/notes",
    github: "https://github.com/LukeHunter1991/Note_Taker"
},
{
    source: './images/Budget.png',
    title: 'Budget Planner',
    weblink: "https://lukehunter1991.github.io/Budget-Memo/",
    github: "https://github.com/LukeHunter1991/Budget-Memo"
},
{
    source: './images/CSS_Cheatsheet.png',
    title: 'CSS Cheatcheet',
    weblink: "https://github.com/LukeHunter1991/css-cheatsheet",
    github: "https://github.com/LukeHunter1991/css-cheatsheet"
},
{
    source: './images/TaskBoard.png',
    title: 'Github 3',
    weblink: "https://lukehunter1991.github.io/task_board/",
    github: "https://github.com/LukeHunter1991/task_board?tab=readme-ov-file"
},
]

export default function portfolio() {
    return (
            <div className='portfolio-container'>
                {projectDetails.map((project, index)=>(
                    <Project key={index} title={project.title} source={project.source} weblink={project.weblink} github={project.github}/>
                ))
                }
            </div>
    )
}