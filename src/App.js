import React, {Component} from 'react';
import './App.css';
import Home from './component/pages/Home';
import Epilogue from './component/pages/Epilogue';

import {BrowserRouter, Route, Switch} from 'react-router-dom'



class App extends Component {
  render(){
    
    return (
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path= "/Epilogue" component = {Epilogue}/>
          </Switch>
      </BrowserRouter>
            
    );
  }
}

export default App;
