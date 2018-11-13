import React, {Component} from 'react';
import logo from './logo.svg';
import PrimarySearchAppBar from './component/Welcome'

import './App.css';
import Typography from "@material-ui/core/Typography/Typography";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header ></header>
                <body>
                <PrimarySearchAppBar/>

                </body>
            </div>
        );
    }
}

export default App;
