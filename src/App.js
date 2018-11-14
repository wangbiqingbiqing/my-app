import Grid from "@material-ui/core/Grid/Grid";
import React, {Component} from 'react';
import {Switch, Route} from "react-router";
import Album from "./component/Album";
import PrimarySearchAppBar from './component/Toolbar'
import './App.css';


class App extends Component {
    render() {
        return (
            <Grid container className="App">
              <Grid item xs={12}>
                <PrimarySearchAppBar/>
              </Grid>
              <Grid item xs={12}>
                <Switch>
                  <Route path='/album' component={Album}/>
                </Switch>
              </Grid>
            </Grid>
        );
    }
}

export default App;
