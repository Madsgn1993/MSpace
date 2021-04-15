import React from 'react';
import {NavLink, Route} from 'react-router-dom';




const Bouton = (redirection, text, element) => {

//Element => C'est le composant où le bouton doit m'amener 
//text => Text du bouton 
//redirection => chemin Url
    return(

        <div>
            <NavLink to={redirection} replace >{text}</NavLink>
            <Route path={redirection} component={element}/>
        </div>
    )

}

export default Bouton ;