import React, { useState } from "react";
import "./Modal.css";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import SkillsList from "./SkillsList";

const SkillsModal = ({ closeModal }) => {
  const [inputSkill, setInputSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const inputSkillHandler = (e) => {
    setInputSkill(e.target.value);
  };

  const submitSkillHandler = (e) => {
    e.preventDefault();
    setSkills([...skills, { text: inputSkill, id: Math.random() * 1000 }]);
    setInputSkill("");
  };

  return (
    <div className="skills__modal">
      <div className="skills__modalHeader">
        <h2>Skills & endorsements</h2>
        <div className="closeIcon__container" onClick={closeModal}>
          <CloseIcon className="modal__closeIcon" />
        </div>
      </div>

      <form action="">
        <div className="skills__inputContainer">
          <input
            name="skillsInput"
            value={inputSkill}
            onChange={inputSkillHandler}
            type="text"
            maxlength="30"
            placeholder="Enter Skill"
            className="skills__input"
            required
          />

          <button
            onClick={submitSkillHandler}
            className="skills__button"
            type="submit"
          >
            <AddIcon className="skills__addIcon" />
          </button>
        </div>

        <div className="skills__listContainer">
          <SkillsList
            skills={skills}
            setSkills={setSkills}
            className="skills__container"
          />
        </div>
      </form>

      <div className="skills__modalBootom">
        <button className="cancel__button" onClick={closeModal}>Cancel</button>

        <button className="save__button">Save</button>
      </div>
    </div>
  );
};

export default SkillsModal;
