import React from 'react';
import Skill from './Skill'
import './Modal.css'


function SkillsList({ skills, setSkills }) {
    return (
        
            <div className="skills__container">
                <ul className="skills__list">
                    {skills.map( (skill) => (
                        <Skill 
                        skills={skills}
                        setSkills={setSkills}
                        skill={skill}
                        key={skill.id}
                        text={skill.text} 
                        />
                    ))} 
                </ul>
            </div>
        
    )
}

export default SkillsList;
