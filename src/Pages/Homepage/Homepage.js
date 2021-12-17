import React, {useState} from 'react';
import './styles.css'
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form"

const Homepage = () => {

    const [ checkbox, setCheckBox ] = useState('')
    const history = useHistory();
    const { handleSubmit } = useForm()

    function handleOnChange(e){
       setCheckBox(e.target.value)
    }

    function onSubmit(){
        if(checkbox === 'ide'){
            history.push('/fileupload')
        } else{
            history.push('/singleupload')
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Upload-Download App</h2>
            <fieldset className="fieldset-container">
                <legend>Choose Upload Method</legend>
                <label htmlFor="checkbox1">
                    <input
                        type="radio"
                        id="checkbox1"
                        value="database"
                        checked={checkbox === "database"}
                        onChange={handleOnChange}/>
                    Database
                </label>
                <br/>
                <label htmlFor="checkbox2">
                    <input
                        type="radio"
                        id="checkbox2"
                        value="ide"
                        checked={checkbox === "ide"}
                        onChange={handleOnChange}/>
                    IDE
                </label>
                <br/>
                <button type="submit">Upload</button>
            </fieldset>
            </form>
        </div>
    );
};

export default Homepage;