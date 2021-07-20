import React, { useEffect } from "react";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./comps/Header/Header";
import Login from "./Login/Login";
import Home from "./Home";
import Profile from "./routes/Profile/Profile";
import Network from './routes/Network/Network';
import { auth } from "./firebase/firebase";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div>
            <AnimatePresence>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/network" component={Network} />
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
