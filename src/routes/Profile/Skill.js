import React from 'react';
import './Profile.css';

function Skill({content}) {
    return (
        <div className='skill__item'>
            <h4>{content}</h4>
        </div>
    )
}

export default Skill;
