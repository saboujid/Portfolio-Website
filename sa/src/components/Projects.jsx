import data from '../projects_data'
import React from 'react'
import ProjectCard from './ProjectCard'
import { nanoid } from "nanoid"
import arrow from '../assets/arrow-right.png'


export default function Projects() {
    const [projectsData, setProjectsData] = React.useState(data)

    const projectElement = projectsData.map(item => {
        return (
            <ProjectCard key={nanoid()} title={item.title} description={item.description} img={item.img} url={item.url} />
        )
    })

    return (
        <div className="Projects" id='projects'>
            <h1>Projects</h1>
            <div className="projectWraper">
                {projectElement}
            </div>
            <a href='https://www.github.com/saboujid' id='more' target="_blank">
                <p>MORE PROJECTS</p>
                <img src={arrow} />
            </a>
        </div>
    )
}