import React, { useState } from "react";
import "./Profile.css";
import "../../App.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import People from "./People/People";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { motion } from "framer-motion";
import Modal from "react-modal";
import SkillsModal from "./Modal/SkillsModal";
import Skill from "./Skill";


function Profile() {
  const user = useSelector(selectUser);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModalHandler = () => setModalIsOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="app__body"
    >
      <div className="profile">
        <div className="profile__left">
          <div className="profile__mainContainer">
            <img
              src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              alt=""
            />
            <Avatar src={user.photoUrl} className="profile__avatar">
              {user.displayName[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h3>{user.company}</h3>
            <div className="profile__mainBottom">
              <div className="profile__mainInfo">
                <h4>Germany</h4>
                <h4 className="connections">310 Connections</h4>
                <h4 className="contact__info">Contact Info</h4>
              </div>
              <div className="profile__edit">
                <EditOutlinedIcon className="editIcon" />
              </div>
            </div>
          </div>

          <div className="profile__skills">
            <div className="profile__skillsHeader">
              <h3>Skills & endorsements</h3>
              <div
                onClick={() => setModalIsOpen(true)}
                className="profile__edit"
              >
                <EditOutlinedIcon className="editIcon" />
              </div>
            </div>

            <div className="skill__container">
             <Skill content="Management" />
             <Skill content="Programming" />
             <Skill content="Programming" />
             <Skill content="Programming" />
             <Skill content="code" />
             <Skill content="Programming" />
             
            </div>
            



            {/* Modal */}

            <div>
              <Modal className="modal__container" isOpen={modalIsOpen}>
                <SkillsModal
                  openModal={modalIsOpen}
                  closeModal={closeModalHandler}
                />
              </Modal>
            </div>

            {/* End Modal */}

          </div>
        </div>


        {/* Profile right side */}
        <div className="profile__right">
          <div className="people__youKnow">
            <div className="people__header">
              <h3>People you may know</h3>
              <PersonAddIcon />
            </div>

            <People name="Elon Musk" description="CEO - Tesla and SpaceX" />
            <People
              name="Bill Gates"
              description="Co-Chair at Bill & Melinda Gates Foundation"
            />
            <People
              name="Jeff Bezos"
              description="CEO and Chairmain - Amazaon"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;
