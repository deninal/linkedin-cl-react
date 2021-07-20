import { Avatar } from '@material-ui/core';
import React from 'react';
import './People.css';
import Popup from '../../../comps/Popover/Popup';


function People({name, description}) {

    

    return (
        
        

        <div className="people__element">
            <div className="people__elementLeft">
                <Avatar className="people__avatar"/>             
            </div>
                                                                            
            <div className="people__elementRight">
                <h3>{name}</h3>
                <h4>{description}</h4>  
                <Popup content="Connect" message={"You are now connected with " + name}/>
            </div>
                                                                            
        </div>
                                                                        
            
    )
}

export default People;
