'use client'

import { useRef, useState } from 'react'
import classes from "./image-picker.module.css"
import Image from 'next/image'

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState()
    const imageInputRef = useRef();

    const handlePickClick = () => {
        imageInputRef.current.click()
    }

    const handleImageChange = (event) => {
        console.log(event.target)
        const file = event.target.files[0];

        if (!file) {
            return
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p> No image picked yet.</p>}
                    {pickedImage && <Image
                        src={pickedImage}
                        alt="The image selected by the user."
                        fill
                    />}
                </div>
                <input
                    type="file"
                    className={classes.input}
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button
                    className={classes.button}
                    type="button"
                    onClick={handlePickClick}
                    
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker