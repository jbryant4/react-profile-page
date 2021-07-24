import React from 'react';

function Projects({ projectInfo }) {
    const cardStyle = {
        'justify-content':'space-between'
    }
    return (
        <div className='container'>
            <div className='row'  style={cardStyle}>
            {projectInfo.map(project => (
               <div className="card col-sm-5 col-md-4" >
               <img src={project.image} className="card-img-top" alt={project.title} />
               <div className="card-body">
                 <h5 className="card-title">{project.title}</h5>
                 <p className="card-text">{project.description}</p>
                 <a href={project.repo} className="btn btn-primary">GitHub Repo</a>
                 <a href={project.app} className="btn btn-primary">Visit App</a>
               </div>
             </div>

            ))}
            </div>
        </div>
    )
}


export default Projects