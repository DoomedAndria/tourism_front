import React, {useState,useEffect} from 'react'
import "./Gallery.css"
import GalleryCard from "../GalleryCard/GalleryCard";
import Axios from "axios";
import {useLocation} from "react-router-dom";


export default function Gallery(props) {
    const[gallery,set_gallery] = useState([])
    useEffect(()=>{
        Axios.get('https://website3256.herokuapp.com/api/gallery').then((response)=>{
            set_gallery(response.data)
        })
    },[])

    return(
        <div id="gallery" className="gallery">
            <h1>{props.lang==="en"?"Gallery":"გალერეა"}</h1>
            <div className="gallery-cards">
                {gallery.map((obj)=>{
                    return <GalleryCard lang={props.lang} gallery_card={obj}/>
                })}
            </div>
        </div>
    )
}