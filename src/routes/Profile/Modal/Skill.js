import React from 'react';
import './Modal.css';
import CloseIcon from '@material-ui/icons/Close';
import SkillText from './SkillText'

function Skill( {text, skill, skills, setSkills }) {

    

    const deleteSkillHandler = (e) => {
        e.preventDefault();
        setSkills(skills.filter((el) =>
            el.id !== skill.id
            ))
    }
    return (
        <div className="skill">
            <li>
                <SkillText text={text}/>
            </li>
            <button className="delete__button" onClick={deleteSkillHandler}>
                <CloseIcon className="delete__buttonText"/>
            </button>
        </div>
    )
}

export default Skill;
