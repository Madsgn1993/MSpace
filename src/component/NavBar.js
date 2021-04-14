import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Epilogue from './pages/Epilogue';



const NavBar = () => {



    return(

        
        
            <ul>
                <li>
                    <NavLink to="/Epilogue" replace >START</NavLink>
                    <Route path="/Epilogue" component={Epilogue}/>

                </li>
            </ul>
        
     

        

    )
}

export default NavBar