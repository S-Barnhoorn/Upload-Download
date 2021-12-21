import React, {useState} from 'react';
import './styles.css'
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form"



const Homepage = ({check, setCheck}) => {

    const history = useHistory();
    const { handleSubmit } = useForm()

    function handleOnChange(e){
       setCheck(e.target.value)
    }

    function onSubmit(){
        if(check === 'IDE'){
            history.push('/secondpage')
        } else if(check === "Database"){
            history.push('/secondpage')
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset-container">
                <legend>Choose Upload Method</legend>
                <label htmlFor="checkbox1">
                    <input
                        type="radio"
                        id="checkbox1"
                        value="Database"
                        checked={check === "Database"}
                        onChange={handleOnChange}/>
                    Database
                </label>
                <br/>
                <label htmlFor="checkbox2">
                    <input
                        type="radio"
                        id="checkbox2"
                        value="IDE"
                        checked={check === "IDE"}
                        onChange={handleOnChange}/>
                    IDE
                </label>
                <button type="submit">Verder</button>
            </fieldset>
            </form>
        </div>
    );
};

export default Homepage;