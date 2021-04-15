import React, {Component} from 'react';
import './App.css';
import Home from './component/pages/Home';
import Epilogue from './component/pages/epilogue/Epilogue';
import Univers1 from './component/pages/univers1/Univers1'
import Saturne from './component/pages/univers1/planeteUniver1/planeteSaturne/Saturne'

import {BrowserRouter, Route, Switch} from 'react-router-dom'



class App extends Component {
  render(){
    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path= "/Epilogue" component = {Epilogue}/>
          <Route exact path= "/Univers1" component = {Univers1}/>
          <Route exact path= "/Saturne" component = {Saturne}/>
        </Switch>
      </BrowserRouter>
            
    );
  }
}

export default App;
