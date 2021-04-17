//IMPORT ELEMENT PROPRE A REACT
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
// IMPORT DE MES PROPRES COMPONENT------
import Home from './component/pages/Home';
import Epilogue from './component/pages/epilogue/Epilogue';
import Univers1 from './component/pages/univers1/Univers1'
import Saturne from './component/pages/univers1/planeteUniver1/planeteSaturne/Saturne'
import Dinosphere from './component/pages/univers1/planeteUniver1/planeteDinosphere/Dinosphere'
import Mars from './component/pages/univers1/planeteUniver1/planeteMars/Mars'




class App extends Component {
  render(){
    
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path= "/Epilogue" component = {Epilogue}/>
          <Route exact path= "/Univers1" component = {Univers1}/>
          <Route exact path= "/Saturne" component = {Saturne}/>
          <Route exact path= "/Dinosphere" component = {Dinosphere}/>
          <Route exact path="/Mars" component = {Mars}/>
          <Route exact path="/Home" component={Home}/>
        </Switch>
      </BrowserRouter>
            
    );
  }
}

export default App;
