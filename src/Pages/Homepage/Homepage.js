import React, {useState} from 'react';
import './styles.css'

const Homepage = () => {

    const [ checkbox, setCheckBox ] = useState('')

    function handleOnChange(e){
       setCheckBox(e.target.value)
    }

    return (
        <div className="container">
            <form>
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