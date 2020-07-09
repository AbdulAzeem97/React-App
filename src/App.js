import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Date from "./Date.js";
import LineBar from "./LineBar.js";

import Progress from "./Progress.js";

import Cards from "./Cards.js";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { colors } from "@material-ui/core";
// import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    // marjin: 15,
    // display: "flex",
    // backgroundColor: "lightblue",
    // flexWrap: "wrap",
    // flexDirection: "column",
    // marjinTop: 50,
    // "& > *": {
    // margin: theme.spacing(1),
    //   width: theme.spacing(16),
    // height: theme.spacing(16),
    // },
  },
  // paper: {
  //   // height: 500,
  //   backgroundColor:'#234324'
  // },

  card: {
    backgroundColor: "#1024",
    // height: 500,
    marjinTop: 50,
    width: 400,
    margin: "0 auto",
    padding: 15,
    textAlign: "center",
  },

  input: {
    width: "97%",
  },
}));
function App() {
  const classes = useStyles();

  // const [repos, setRepos] = useState([{}]);

  // useEffect( () => {

  //   async function getRepos() {
  //     const response = await fetch("https://api.github.com/users/abdulazeem97/repos")
  //     const data = await response.json();
  //     console.log(data);
  //     setRepos(data)
  //   }
  //   getRepos();

  //   // "https://api.github.com/users/muhammadmohsin/repos"
  //   // fetch('https://jsonplaceholder.typicode.com/posts/1')
  //   //   .then(response => response.json())
  //   //   .then(json => {
  //   //     console.log(json);
  //   //     setData(json);
  //   //   })
  // },[])

  return (
    <div className={classes.root}>
      <NavBar />
      <LineBar />
      <Date className={classes.Cards} />
      {/* <Cards /> */}
      {/* <Paper elevation={0} />
      <Paper /> */}
      {/* <Paper elevation={3} className={classes.card}>
        <h1>LOGIN</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email " className={classes.input} /> */}
          {/* <br></br>  */}
          {/* <TextField label="Enter Password " className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button> */}
          {/* <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        {/* </form> */}
        {/* <CircularProgress value={50} /> */}
        {/* <Progress /> */}
      {/* </Paper> */}

      {/* <Paper elevation={3} className={classes.paper} /> */}
      {/* <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />  */}
    </div>
  );
}

export default App;
