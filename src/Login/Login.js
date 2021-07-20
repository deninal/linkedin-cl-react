import React, { useState } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { auth } from '../firebase/firebase';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import firebase from '../firebase/firebase';
import google from '../images/google.png';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        LinkedIn Clone by Denis Nallbati
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Login() {
//   const classes = useStyles();

  // login with google
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  
  const authWithGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider)
  };

  // login with facebook


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [company, setCompany] = useState("");
  const dispatch = useDispatch();
  
  const loginToApp = (e) => {
    e.preventDefault();

    if (!name && !email && !password) {
      return alert("Please enter your profile details to sign in");
    }

    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoUrl,
        company: userAuth.user.company,
      })
      );
    }).catch(error => alert(error));
  };

  const register = () => {
    if (!name && !email && !password) {
      return alert("Please enter your profile details to register");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
     
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic,
            company: company,
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
                company: company,
            }));
        });
    }).catch(error => alert(error));
  };

  return (
    <Container className='login__container' component="main" maxWidth="xs">
      <CssBaseline />

    <div className="loginPage__container">

    <div className='login__paper'>
        <img src="https://cdn.worldvectorlogo.com/logos/linkedin.svg" alt="" className='img' />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className='login__form' noValidate>
        <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={e => setName(e.target.value)}
          />
           
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="dense"
            
            fullWidth
            id="profilePic"
            label="Profile Pic URL (optional)"
            name="profilePic"
            autoComplete="profilePic"
            autoFocus
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="dense"
            
            fullWidth
            id="company"
            label="Company"
            name="company"
            autoComplete="company"
            autoFocus
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            className="login__submit"
            onClick={loginToApp}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            className="login__submit"
            onClick={register}
          >
            Register
          </Button>
          
          <div className="login__with">
            
            <img src={google} alt="" onClick={authWithGoogle}/>
            {/* <img src={facebook} alt="" onClick={authWithFacebook}/> */}
            
          </div>
          

          <Grid container classname="login__bottomItems">
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={register}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>







  {/* End of containter */}


    </div>


      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
