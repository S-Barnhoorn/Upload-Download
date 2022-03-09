import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

const Multipleupload = ({check, setBody, endpoint}) => {

    const {handleSubmit} = useForm();
    const [previewImage, setPreviewImage] = useState('single-upload__container')
    // const [ file, setFile ] = useState([]);
    const [url, setUrl] = useState([]);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([]);
    const [multipleFile, setMultipleFile] = useState([])
    // const history = useHistory();

    // const handleImageChange2 = (e) => {
    //     let reader = new FileReader();
    //
    //     let files = e.target.files;
    //
    //
    //     // setBody('body2')
    //
    //     setLoading(true);
    //     setBody('body2')
    //
    //
    //     reader.onloadend = () => {
    //
    //         setFile(file);
    //         setUrl(reader.result)
    //
    //     }
    //
    //     reader.readAsDataURL(file);
    // }

    const handleImageChange = (e) => {
        let files = e.target.files;
        setMultipleFile(files)

        setPreviewImage('single-upload__container2')
        setBody('body2')
        setLoading(true);

        let urlList = [];


        // let output = document.getElementById('result')

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let picReader = new FileReader();

            picReader.onloadend = (event) => {
                urlList.push(event.target.result);
            }

            // picReader.addEventListener("load", function (event) {
            //     let picFile = event.target;
            //     console.log('PICFILE', picFile)
            //     let div = document.createElement('div');
            //     div.innerHTML = "<img alt='image preview' class='thumbnail' src='" + picFile.result + "'" + "title='" + file.name + "'/>";
            //     output.insertBefore(div, null);
            // });
            picReader.readAsDataURL(file);
            setLoading(false)
        }
        console.log('WAT IS DE LIJST', urlList)
        setUrl(urlList);
    }

    async function uploadFile() {
        let formData = new FormData();

        Object.values(multipleFile).map((test) => {
            formData.append('files', test)
        })

        // console.log(test)
        // formData.append('files', test)

        try {
            const result = await axios.post(`${endpoint}`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
            setData(result.data)
            console.log(result.data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={previewImage}>
            <label htmlFor="file" className="label">
                <i className="material-icons">add_a_photo</i>
            </label>
            <input className="text-color"
                   id="file"
                   type="file" multiple
                   title=" "
                   onChange={handleImageChange}
            />
            {/*<output id='result'></output>*/}

            <form className="form-container" onSubmit={handleSubmit(uploadFile)}>
                {loading ?
                    <p>Je moeder</p>
                    : <>
                        <fieldset className="single-upload__fieldset">
                            <legend>{check} Upload</legend>
                            <div className="result-container">
                                <output id="result"/>
                            </div>
                        </fieldset>

                        <button className="btn-multiple" type="submit">Versturen</button>
                    </>
                }

                {url.length > 0 ?
                    <>{url.map(test => {
                        return (<img key={test} src={test} alt="hoi"/>)
                       })}
                    </>
                    :
                    <div>
                        nee.
                    </div>
                }

                {/*<fieldset className="single-upload__fieldset">*/}
                {/*    <legend>{check} Upload</legend>*/}
                {/*<div className="result-container">*/}
                {/*    <output id="result"/>*/}
                {/*</div>*/}

                {/*/!*{data.map((test) => {*!/*/}

                {/*/!*})}*!/*/}

                {/*    /!*<div>*!/*/}
                {/*    /!*    {url ?*!/*/}

                {/*    /!*        <img src={url} alt=""/>*!/*/}

                {/*    /!*        :*!/*/}
                {/*    /!*        <div>*!/*/}

                {/*    /!*        </div>*!/*/}
                {/*    /!*    }*!/*/}
                {/*    /!*</div>*!/*/}
                {/*</fieldset>*/}
            </form>
        </div>
    );
};

export default Multipleupload;
