import React, {useEffect, useState} from 'react';
import './styles.css';
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from 'axios';

const Singleupload = ({check, setBody, endpoint}) => {

    const { handleSubmit } = useForm();
    const [ file, setFile ] = useState([]);
    const [ url, setUrl ] = useState('');
    const [ data, setData ] = useState([]);
    const history = useHistory();

    const handleImageChange = (e) => {
        let reader = new FileReader();

        let file = e.target.files[0];

        // setBody('body2')

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
                const result = await axios.post(`${endpoint}`, formData,
                    {
                        headers: {
                        "Content-Type": "multipart/form-data"
                        },
                    file: formData
                    })
                setData(result.data)
                console.log(result)
            } catch(e){
                console.error(e)
            }
        }


    return (
        <div className="single-upload__container">
            <form onSubmit={handleSubmit(uploadFile)}>
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
                <div>
                    <a href={data.url} target="_blank">{data.fileName}</a>
                </div>
                <button type="submit">Versturen</button>
            </form>
        </div>
    );
};

export default Singleupload;
