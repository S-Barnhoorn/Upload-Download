import React, {useEffect, useState} from 'react';
import './styles.css';
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';

const Singleupload = ({check}) => {

    const { handleSubmit } = useForm();
    const [ file, setFile ] = useState([]);
    const [ url, setUrl ] = useState('');
    const history = useHistory();

    const handleImageChange = (e) => {
        let reader = new FileReader();

        let file = e.target.files[0];

        reader.onloadend = () => {

            setFile(file);
            setUrl(reader.result)

        }

        reader.readAsDataURL(file);
    }

        async function uploadFile(){
            let formData = new FormData();


            formData.append("file", file)
            try{
                const result = await axios.post('http://localhost:8080/single/uploadDb', formData,
                    {headers:{
                        "Content-Type": "multipart/form-data"
                        },
                    file: formData
                    })
                console.log(result)
                console.log(formData)
                console.log(file)
                setTimeout(() => {
                    history.push('/')
                }, 200)
                console.log(result)
            } catch(e){
                console.error(e)
            }
        }


    return (
        <div className="single-upload__container">
            <form onSubmit={handleSubmit(uploadFile)}>
                {console.log(file)}
            <fieldset className="single-upload__fieldset">
                <legend>{check} Upload</legend>
            <input className="text-color"
                type="file"
                title=" "
                onChange={handleImageChange}
            />
            <div>
                {url ?
                    <img src={url} alt="uploadImage"/>
                    :
                    <div>

                    </div>
                }
            </div>
            </fieldset>

                <button type="submit">Versturen</button>
            </form>
        </div>
    );
};

export default Singleupload;