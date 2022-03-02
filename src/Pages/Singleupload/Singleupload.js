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
    const [ loading, setLoading ] = useState(false)
    const history = useHistory();

    const handleImageChange = (e) => {
        let reader = new FileReader();

        let file = e.target.files[0];


        // setBody('body2')

        setLoading(true);
        setBody('body2')


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
                    })
                setData(result.data)
                console.log(result)
                console.log(formData)
            } catch(e){
                console.error(e)
            }
        }


    return (
        <div className="single-upload__container">

            <label htmlFor="file" className="label">
                <i className="material-icons">add_a_photo</i>
            </label>
            <input className="text-color"
                   id="file"
                   type="file"
                   title=" "
                   onChange={handleImageChange}
            />
            <form onSubmit={handleSubmit(uploadFile)}>
                {loading? <>
                    <button className="btn-multiple" type="submit">Versturen</button>
                    <div>
                        <a className="link-location" href={data.url} target="_blank">{data.fileName}</a>
                    </div>
                    <fieldset className="single-upload__fieldset">
                        <legend>{check} Upload</legend>
                        <div>
                            {url ?
                                <img src={url} className="uploadImage" alt="uploadImage"/>
                                :
                                <div>

                                </div>
                            }
                        </div>
                    </fieldset>
                </>: '' }

            </form>
        </div>
    );
};

export default Singleupload;
