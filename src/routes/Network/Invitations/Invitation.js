import React from "react";
import "./Invitation.css";
import { Avatar } from "@material-ui/core";
import Popup from "../../../comps/Popover/Popup"

function Invitation({ name, page }) {
  return (
    <div className="invitationOption">
      <div className="invitationOption__left">
        <Avatar className="invitationOption__avatar">{name[0]}</Avatar>
        <h3>
          {/* {name} <span>invited you to like</span> {page} */}
          <span>{name}</span> invited you to like <span>{page}</span>
        </h3>
      </div>
      <div className="invitationOption__right">
        <Popup className="popup__button" content="Ignore" message="Invitation is ignored"/>
        <Popup className="popup__button" content="Accept" message={"Invitation to like " + page + " is accepted"}/>
      </div>
    </div>
  );
}

export default Invitation;
