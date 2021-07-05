import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Features from './components/Features';
import Layouts from './components/Layouts';
import Users from './components/Users';
import useStyles from "./Styles";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';





export default function Navbar() {
  const classes = useStyles();
  
  return (
    <Box>
        <Router>
            <Box>
                <nav className={classes.menuWrapper}>
                       <Container>
                       <Box className={classes.wrapper}>
                            <Box>
                            <Link to="/"><img className={classes.logo} src="https://gogo-react.coloredstrategies.com/static/media/black.e27080da.svg" /></Link>
                            </Box>
                            <ul className={classes.menuList}>
                                <li className={classes.listItem}>
                                  <Link className={classes.item} to="/">features</Link>
                                </li>
                                <li className={classes.listItem}>
                                  <Link className={classes.item} to="/layout">layouts</Link>
                                </li>
                                <li className={classes.listItem}>
                                  <Link className={classes.item} to="/users">components</Link>
                                </li>
                                <li className={classes.listItem}>
                                  <Link className={classes.item} to="/users">apps</Link>
                                </li>
                                <li className={classes.listItem}>
                                  <Link className={classes.item} to="/users">themes</Link>
                                </li>
                                <button className={classes.buyBtn} type='button'>buy</button>
                            </ul>
                       </Box>
                       </Container>
                </nav>
                <Switch>
                    <Route path="/layout">
                        <Layouts />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Features />
                    </Route>
                </Switch>
            </Box>
        </Router>
    </Box> 
  );
}