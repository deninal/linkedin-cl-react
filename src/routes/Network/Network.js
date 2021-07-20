import React from "react";
import "./Network.css";
import { motion } from "framer-motion";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Invitation from "./Invitations/Invitation";

function Network() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="app__body"
    >
      <div className="network">
        <div className="network__left">
          <div className="network__header">
            <h3>Manage my network</h3>
            <PeopleAltIcon />
          </div>

          <div className="network__options">
            <div className="network__option">
              <div className="network__optionLeft">
                <PeopleOutlineIcon />
                <h3>Connections</h3>
              </div>
              <div className="network__optionRight">
                <h3>310</h3>
              </div>
            </div>

            <div className="network__option">
              <div className="network__optionLeft">
                <PermContactCalendarOutlinedIcon />
                <h3>Contacts</h3>
              </div>
              <div className="network__optionRight">
                <h3>810</h3>
              </div>
            </div>

            <div className="network__option">
              <div className="network__optionLeft">
                <AccountCircleOutlinedIcon />
                <h3>People | Follow</h3>
              </div>
              <div className="network__optionRight">
                <h3>7</h3>
              </div>
            </div>

            <div className="network__option">
              <div className="network__optionLeft">
                <EventOutlinedIcon />
                <h3>Events</h3>
              </div>
              <div className="network__optionRight">
                <h3>3</h3>
              </div>
            </div>

            <div className="network__option">
              <div className="network__optionLeft">
                <EmailOutlinedIcon />
                <h3>Newsletter</h3>
              </div>
              <div className="network__optionRight">
                <h3>2</h3>
              </div>
            </div>

            <div className="network__option">
              <div className="network__optionLeft">
                <span>#</span>
                <h3>Hashtags</h3>
              </div>
              <div className="network__optionRight">
                <h3>12</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Invitations */}

        <div className="network__right">
          <div className="invitations__container">
            <div className="invitations__header">
              <h3>Invitations</h3>
              <h3>See all</h3>
            </div>

            <div className="invitations__body">
              <Invitation name="Elon Musk" page="SpaceX" />

              <Invitation name="Bill Gates" page="Microsoft" />

              <Invitation name="Mark Zuckerberg" page="Facebook" />

              <Invitation name="Bill Gates" page="Microsoft" />

              <Invitation name="Elon Musk" page="SpaceX" />

              <Invitation name="Bill Gates" page="Microsoft" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Network;
