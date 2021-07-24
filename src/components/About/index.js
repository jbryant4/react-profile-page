import React from 'react';

function About({ aboutInfo }) {
    const { image, body } = aboutInfo
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <img src={image} alt='family photo' />
                </div>
                <div className='col-sm-12 col-md-6'>
                    <p>{body}</p>
                </div>
            </div>
        </div>

    )
}


export default About