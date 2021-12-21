import React, {useEffect, useState} from 'react';
import './styles.css';
import axios from 'axios';

const Singleupload = ({check}) => {


    const [ file, setFile ] = useState([]);
    const [ url, setUrl ] = useState('');

    // useEffect(() =>{
    //     async function uploadFile(){
    //         try{
    //             const result = await axios.post('localhost:8080/single/uploadDb')
    //             console.log(result)
    //         } catch(e){
    //             console.error(e)
    //         }
    //     }
    //     uploadFile()
    // }, [])

    const handleImageChange = (e) => {
        let reader = new FileReader();

        let file = e.target.files[0];

        reader.onloadend = () => {

            setFile(file);
            setUrl(reader.result)

        }

        reader.readAsDataURL(file);
    }

    return (
        <div className="single-upload__container">
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
        </div>
    );
};

export default Singleupload;