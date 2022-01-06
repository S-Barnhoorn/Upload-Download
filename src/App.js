import './App.css';
import React, {useState} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Homepage from "./Pages/Homepage/Homepage";
import Fileupload from "./Pages/Fileupload/Fileupload";
import Singleupload from "./Pages/Singleupload/Singleupload";
import Multipleupload from "./Pages/Multipleupload/Multipleupload";
import Secondpage from "./Pages/Secondpage/Secondpage";
import Header from "./Components/Header/Header";




function App() {

    const [ checkbox, setCheckBox ] = useState('')
    const [ endpoint, setEndpoint ] = useState('')
    const [ body, setBody ] = useState('body')

  return (
    <div className={body}>
        <Header/>
        <NavLink to='/'/>
        <NavLink to='secondpage'/>
        <NavLink to='fileupload'/>
        <NavLink to='singleupload'/>
        <NavLink to='multipleupload'/>

        <Switch>
            <Route exact path='/'>
                <Homepage check={checkbox} setCheck={setCheckBox}/>
            </Route>
            <Route path='/secondpage'>
                <Secondpage check={checkbox} setCheck={setCheckBox} setEndpoint={setEndpoint}/>
            </Route>
            <Route path='/fileupload'>
                <Fileupload/>
            </Route>
            <Route path='/singleupload'>
                <Singleupload check={checkbox} setBody={setBody} endpoint={endpoint}/>
            </Route>
            <Route path='/multipleupload'>
                <Multipleupload check={checkbox} setBody={setBody} endpoint={endpoint}/>
            </Route>
        </Switch>

    </div>
  );
}

export default App;
