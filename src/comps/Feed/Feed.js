import React, { useState, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { db } from "../../firebase/firebase";
import firebase from "../../firebase/firebase";
import FlipMove from "react-flip-move";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const user = useSelector(selectUser);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <BorderColorIcon className="feed__createIcon" />
          <form action="">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Create a post"
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <div className="input__photo">
            <input type="file" id="file" accept="image/*" />
            <label for="file">
              <InputOption Icon={ImageIcon} title="Photo" color="#71B4F6" />
            </label>
          </div>

          <InputOption Icon={VideoLibraryIcon} title="Video" color="#80C15E" />
          <InputOption Icon={EventIcon} title="Event" color="#E7A449" />
          <InputOption
            Icon={PostAddIcon}
            title="Write Article"
            color="#F5987E"
          />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl} }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            id={id} 
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
