import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { useForm } from "react-hook-form"

const Secondpage = ({check}) => {
    const [ uploadAmount, setUploadAmount ] = useState('')
    const history = useHistory();
    const { handleSubmit } = useForm()

    function handleOnChange(e){
        setUploadAmount(e.target.value)
    }

    function onSubmit(){
        if(uploadAmount === 'single'){
            history.push('/singleupload')
        } else if(uploadAmount === 'multiple'){
            history.push('/multipleupload')
        }
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset-container">
                        <legend>{check} Upload</legend>
                        <div className="label-container">
                        <label htmlFor="checkbox1">
                            <input
                                type="radio"
                                id="checkbox1"
                                value="single"
                                checked={uploadAmount === "single"}
                                onChange={handleOnChange}/>
                              Single Upload
                        </label>
                        <br/>
                        <label htmlFor="checkbox2">
                            <input
                                type="radio"
                                id="checkbox2"
                                value="multiple"
                                checked={uploadAmount === "multiple"}
                                onChange={handleOnChange}/>
                              Multiple Upload
                        </label>
                        </div>
                        <button type="submit">Upload</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Secondpage;