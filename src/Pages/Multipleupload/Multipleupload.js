import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {logDOM} from "@testing-library/react";

const Multipleupload = ({check}) => {

    const { handleSubmit } = useForm();
    const [ file, setFile ] = useState([]);
    const [ url, setUrl ] = useState([]);
    const [ data, setData ] = useState([]);
    const [ multipleFile, setMultipleFile ] = useState([])
    const history = useHistory();

    let image = [];

    const handleImageChange = (e) => {

        let files = e.target.files;

        let output = document.getElementById('result')
        // let fileResult = Object.values(file)

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let picReader = new FileReader()

            picReader.addEventListener("load", function (event) {
                let picFile = event.target;
                let div = document.createElement('div');
                div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + file.name + "'/>";
                output.insertBefore(div, null);
            });
            picReader.readAsDataURL(file);
        }

        // setMultipleFile(fileResult)
        //
        //         for (let i = 0; i < fileResult.length; i++) {
        //             let reader = new FileReader();
        //             let fileTest = e.target.files[i];
        //             reader.onloadend = () => {
        //
        //                 setFile(fileTest.name);
        //                 setUrl(reader.result);
        //                 image.push(reader.result)
        //                 // console.log(image)
        //                 return image
        //             }
        //           reader.readAsDataURL(fileTest);
        //         }
    }


    async function uploadFile(){
        let formData = new FormData();

        for (let i = 0; i < multipleFile.length; i++) {
            formData.append(`image[${i}]`, multipleFile[i])
        }

        try{
            const result = await axios.post('http://localhost:8080/multiple/upload/db', formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                    files: formData
                })
            setData(result.data)
            console.log(result)
        } catch(e){
            console.error(e)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(uploadFile)}>
                {/*{console.log(handleImageChange.image)}*/}
                {/*{console.log(url)}*/}
                <fieldset className="single-upload__fieldset">
                    <legend>{check} Upload</legend>
                    <input className="text-color"

                           type="file" multiple
                           title=" "
                           onChange={handleImageChange}
                    />
                    <output id="result"/>
                    <div>
                        {url ?

                            <img src={url} alt=""/>

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

export default Multipleupload;
