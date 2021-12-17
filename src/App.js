import './App.css';
import React from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import Fileupload from "./Pages/Fileupload/Fileupload";
import Singleupload from "./Pages/Singleupload/Singleupload";
import Multipleupload from "./Pages/Multipleupload/Multipleupload";


function App() {
  return (
    <div>
        <NavLink to='/'/>
        <NavLink to='fileupload'/>
        <NavLink to='singleupload'/>
        <NavLink to='multipleupload'/>

        <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>
            <Route exact path='/fileupload'>
                <Fileupload/>
            </Route>
            <Route exact path='/singleupload'>
                <Singleupload/>
            </Route>
            <Route exact path='/multipleupload'>
                <Multipleupload/>
            </Route>
        </Switch>

    </div>
  );
}

export default App;
