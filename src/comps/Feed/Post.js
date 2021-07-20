import React, { forwardRef} from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputOption from './InputOption';
import { InsertCommentOutlined, RedoOutlined, Send, ThumbUpAltOutlined } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';





// make post avatar square
const useStyles = makeStyles((theme) => ({
    square: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    
  }));





const Post = forwardRef (({  message, id}, ref) => {

    useStyles();

    const user = useSelector(selectUser);

    const deletePost = () => {
        
       
        db.collection("posts").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    
    
    } 
 
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Link to="/profile" style={{ textDecoration: 'none'}}>
                    <Avatar src={user.photoUrl} className='post__avatar' variant="square">
                    {user.displayName[0]}
                    </Avatar>
                </Link>    
                
                <div className="post__info">
                    <h2>{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
                
            </div>

            <div className="post__body">
                <p>{message}</p>
                <img src="" alt=""/>
                    
            </div>

        <div className="post__bottom">
                <div className="post__buttons">
                    <InputOption Icon={ThumbUpAltOutlined} title='Like' />
                    <InputOption Icon={InsertCommentOutlined} title='Comment' />
                    <InputOption Icon={RedoOutlined} title='Share' />
                    <InputOption Icon={Send} title='Send' />
                    
                </div>
                <DeleteIcon onClick={deletePost} className="delete__icon"/>
           
        </div>
            
        </div>
    );
})

export default Post;
