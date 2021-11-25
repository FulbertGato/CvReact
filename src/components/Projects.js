import React, { useState } from 'react';
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'
const Projects = () => {
    const [projects, setProjects] = useState(data_projects)
    const [active, setActive] = useState('All')


    const handleFilterCategory = (name) => {
        const new_array = data_projects.filter(project => project.category.includes(name))
        setProjects(new_array)
        setActive(name)
    }

    const project_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div className="container projects"
            variants={project_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <div className="projects__navbar">
                <div className={active === 'All' && 'projects__navbar-active'} onClick={
                    () => {
                        setProjects(data_projects)
                        setActive("All")

                    }


                }>All</div>
                <div className={active === 'wordpress' && 'projects__navbar-active'} onClick={() => handleFilterCategory('wordpress')}>WORDPRESS</div>
{/*                 <div className={active === 'laravel' && 'projects__navbar-active'} onClick={() => handleFilterCategory('laravel')}>LARAVEL</div>
                <div className={active === 'symfony' && 'projects__navbar-active'} onClick={() => handleFilterCategory('symfony')}>SYMFONY</div>
                <div className={active === 'angular' && 'projects__navbar-active'} onClick={() => handleFilterCategory('angular')}>ANGULAR</div> */}
                <div className={active === 'react' && 'projects__navbar-active'} onClick={() => handleFilterCategory('react')}>REACT</div>
{/*                 <div className={active === 'java' && 'projects__navbar-active'} onClick={() => handleFilterCategory('java')}>JAVA</div> */}
            </div>

            <div className="row">

                {
                    projects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }

            </div>
        </motion.div>
    );
};

export default Projects;
