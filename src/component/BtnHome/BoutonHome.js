import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Home from '../pages/Home'
import IlluBtnHome from './IlluBtnHome'




const BtnHome = () => {

//Element => C'est le composant où le bouton doit m'amener 
//text => Text du bouton 
//redirection => chemin Url
    return(

        <div id="btnHome">
            <NavLink to='/Home' replace >
             <IlluBtnHome/>
             </NavLink>
            <Route path='/Home' component={Home}/>
        </div>
    )

}

export default BtnHome ;