import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import "./Data/css/styles.css";

import Navbar from './Components/nav';
import Home from './Components/home';
import ActorsContainer from './Components/actorsContainer';
import Actress from './Components/actress';
import Films from './Components/films';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
                    <Route path="/actors/" render={() => <ActorsContainer title="Best Actors" />} />
                    <Route path="/actress/" render={() => <Actress title="Best Actress" />} />
                    <Route path="/films" render={() => <Films title="Best Films" />} />
                </div>
            </BrowserRouter>
        );
  }
}

export default App;
