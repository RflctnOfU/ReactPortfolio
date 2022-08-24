import React from 'react'
import ProjectData from '../projects/ProjectData'
import Card from '../components/Card'

const Portfolio = () => {
    const projects = ProjectData
    return (
        <div className='p-8 m-8 flex flex-wrap max-w-fit'>
            {projects.map((project) =>
                <Card id={project.id} image={project.image} title={project.title} live={project.live} github={project.github} />
            )}
        </div>
    )
}

export default Portfolio