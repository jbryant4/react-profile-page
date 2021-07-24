import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Projects({ projects, currentProject, setCurrentProject }) {
    const cardStyle = {
        'justifyContent': 'space-between'
    }

    const projectIndex =  () => { 
        return projects.findIndex(project => project === currentProject)
    }


    return (
        <div className='container'>
            <div className='row' style={cardStyle}>
                <div>
                    <button onClick= {() =>setCurrentProject(projects[projectIndex()-1] || currentProject)}>Previous Project</button>
                </div>
                <div className="card col-sm-5 col-md-4" >
                    <img src={currentProject.image} className="card-img-top" alt={currentProject.title} />
                    <div className="card-body">
                        <h5 className="card-title">{currentProject.title}</h5>
                        <p className="card-text">{currentProject.description}</p>
                        <a href={currentProject.repo} className="btn btn-primary">GitHub Repo</a>
                        <a href={currentProject.app} className="btn btn-primary">Visit App</a>
                    </div>
                </div>
                <div>
                    <h2>Usage</h2>
                    <FontAwesomeIcon icon={['fab', 'html5']}/>
                </div>
                <div>
                    <button onClick= {() => setCurrentProject(projects[projectIndex()+1] || currentProject)}>Next Project</button>
                </div>


            </div>
        </div>
    )
}


export default Projects