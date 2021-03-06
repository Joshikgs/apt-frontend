// import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions';

const useStyles = makeStyles(theme => ({
  root: {
    height: '93vh',
  },
  image: {
    backgroundImage: 'url(https://dynamicmedia.irvinecompany.com/is/image/content/dam/apartments/3-readytopublish/communities/northerncalifornia/northpark/thelaurels/photography/NP-LAURELS-MODEL-DINLVJUNE2019.jpg?&wid=766&hei=560&crop=0,0,1751,1280&fit=stretch&iccEmbed=1&icc=AdobeRGB&fmt=pjpeg&pscan=auto)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = props => {
  const classes = useStyles();

    // initializing dispatch
    const dispatch = useDispatch();
    // Setting up local state using the useState hook
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userActions.loginUserToDB(loginForm))
        props.history.push('/')
    };

    const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

    // Destructuring keys from our local state to use in the form
    const { username, password } = loginForm;

    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                required
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={handleChange}
                autoFocus
                />
                <TextField
                required
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={handleChange}
                autoComplete="current-password"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </form>
            </div>
        </Grid>
        </Grid>
    );
}

export default LoginPage;