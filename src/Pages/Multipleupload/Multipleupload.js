import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const Multipleupload = ({check, setBody, endpoint}) => {

    const { handleSubmit } = useForm();
    const [ previewImage, setPreviewImage ] = useState('single-upload__container')
    // const [ file, setFile ] = useState([]);
    // const [ url, setUrl ] = useState([]);
    const [ loading, setLoading ] = useState(false)
    const [ data, setData ] = useState([]);
    const [ multipleFile, setMultipleFile ] = useState([])
    // const history = useHistory();

    const handleImageChange = (e) => {
        let files = e.target.files;
        console.log(files)
        setMultipleFile(files)

        setPreviewImage('single-upload__container2')
        setBody('body2')
        setLoading(true)


        let output = document.getElementById('result')

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let picReader = new FileReader()

            picReader.addEventListener("load", function (event) {
                let picFile = event.target;
                let div = document.createElement('div');
                div.innerHTML = "<img alt='image preview' class='thumbnail' src='" + picFile.result + "'" + "title='" + file.name + "'/>";
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

        Object.values(multipleFile).map((test) => {
            formData.append('files', test)
        })

        // console.log(test)
        // formData.append('files', test)

        try{
            const result = await axios.post(`${endpoint}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            setData(result.data)
            console.log(result.data)
        } catch(e){
            console.error(e)
        }
    }

    return (
        <div className={previewImage}>
            <label htmlFor="file" className="label">
                <i className="material-icons">add_a_photo</i>
            </label>

            <form className="form-container" onSubmit={handleSubmit(uploadFile)}>
                {loading? <button className="btn-multiple" type="submit">Versturen</button> : '' }
                {/*{console.log(handleImageChange.image)}*/}
                {/*{console.log(url)}*/}
                {/*<fieldset className="single-upload__fieldset">*/}
                {/*    <legend>{check} Upload</legend>*/}
                    <input className="text-color"
                           id="file"
                           type="file" multiple
                           title=" "
                           onChange={handleImageChange}
                    />
                <div className="result-container">
                    <output id="result"/>
                </div>

                {data.map((test) => {

                })}

                    {/*<div>*/}
                    {/*    {url ?*/}

                    {/*        <img src={url} alt=""/>*/}

                    {/*        :*/}
                    {/*        <div>*/}

                    {/*        </div>*/}
                    {/*    }*/}
                    {/*</div>*/}
                {/*</fieldset>*/}
            </form>
        </div>
    );
};

export default Multipleupload;
