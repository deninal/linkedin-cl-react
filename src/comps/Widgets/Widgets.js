import React from 'react';
import './Widgets.css';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LaunchIcon from '@material-ui/icons/Launch';
import PersonAddIcon from '@material-ui/icons/PersonAdd';



function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <LaunchIcon className="widgets__articleIcon"/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )


    return (
        <div className="widgets">
            <div className="widgets__container">
                <div className="widgets__header">
                    <h2>News</h2>
                    <InfoOutlinedIcon className="widgets__infoIcon"/>
                </div>
                {newsArticle("This is an article", "100 readers")}
                {newsArticle("This is another article", "120 readers")}
                {newsArticle("This is yet another article", "90 readers")}
            </div>

            <div className="widgets__container">
                <div className="widgets__header">
                        <h2>Recommendations</h2>
                        <PersonAddIcon />
                </div>

                
            </div>
            
        </div>
    )
}
 
export default Widgets;
