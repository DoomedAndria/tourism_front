import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../media/images/logo.png";
import {Link} from 'react-scroll';
import {useNavigate} from "react-router-dom";

export default function Navbar (props){
    const navigate = useNavigate();

    const [opened,setOpened] = useState(false);
    const [lang,setLang] = useState("en");
    return(
        <div>
            <nav>
                <div className={!opened?'hamburger is-active':'hamburger'}
                onClick={()=> setOpened(!opened)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="nav-top">
                    <img className="logo" src={logo}></img>
                    <div className="nav-buttons">
                        <select onChange={(e)=>{
                            setLang(e.target.value)
                            props.setLan(e.target.value)
                        }}>
                            <option value="en">english</option>
                            <option value="ge">georgian</option>
                        </select>
                        <button onClick={props.openLogin} className="signin">{lang==="en"?"Sign in":"შესვლა"}</button>
                        <button onClick={props.openRegister} className="register">{lang==="en"?"Register":"რეგისტრაცია"}</button>
                    </div>


                </div>
                <ul style={{left: `${!opened ? '0': '-100%'}`}}>

                    <li><a onClick={()=>{navigate("/")}}>{lang==="en"?"Home":"მთავარი"}</a></li>
                    {/*<li><Link className="a" to="gallery" spy={true} smooth={true} offset={-80} duration={500} delay={100} >{lang==="en"?"gallery":"გალერეა"}</Link></li>*/}
                    <li><a onClick={()=>{navigate("/gallery",{state:{lang:lang}})}}>{lang==="en"?"gallery":"გალერეა"}</a></li>
                    {/*<li><Link className="a" to="catalog" spy={true} smooth={true} offset={-80} duration={500} delay={100} >{lang==="en"?"catalog":"კატალოგი"}</Link></li>*/}
                    <li><a onClick={()=>{navigate("/catalog")}}>{lang==="en"?"catalog":"კატალოგი"}</a></li>
                    {/*<li><Link className="a" to="contactme" spy={true} smooth={true} offset={-80} duration={500} delay={100} >{lang==="en"?"contact me":"კონტაქტი"}</Link></li>*/}
                    <li onClick={()=>{navigate("/contact_me")}}><a>{lang==="en"?"contact me":"კონტაქტი"}</a></li>

                    <li>
                        <div className="hid-but">
                            <select onChange={(e)=>{
                            setLang(e.target.value)
                            props.setLan(e.target.value)
                            }}>
                                <option value="en">english</option>
                                <option value="ge">georgian</option>
                            </select>
                            <button onClick={props.openLogin} className="signin">{lang==="en"?"Sign in":"შესვლა"}</button>
                            <button onClick={props.openRegister} className="register">{lang==="en"?"Register":"რეგისტრაცია"}</button>
                        </div>
                    </li>




                </ul>
            </nav>
            <div className="beh-nav"></div>

        </div>
    )
}
