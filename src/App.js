import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Main from "./components/Main"
import BigCard from "./components/BigCard/BigCard"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import CardsByGallery from "./components/CardsByGallery/CardsByGallery";
import Catalog from "./components/Catalog/Catalog";
import ContactMe from "./components/ContactMe/ContactMe";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home";


function App() {

    const[lang,setLang] = useState("en");
    const[openLogin,setOpenLogin] = useState(false)
    const[openRegister,setOpenRegister] = useState(false)

    return (

            <div className="App">
                <Router>
                    <Navbar setLan={(l)=>{
                          setLang(l)
                    }}
                    openLogin={()=>{
                        setOpenLogin(true)
                    }}
                    openRegister={()=>{
                        setOpenRegister(true)
                    }}/>

                    {openLogin && <Login close={() => {
                        setOpenLogin(false)
                    }}
                    lang={lang}/>}

                    {openRegister && <Register close={() => {
                        setOpenRegister(false)
                    }}
                    lang={lang}/>}

                    <Routes>

                        <Route exact path="/" element={<Main lang={lang}/>}/>

                        <Route exact path="/full_card" element={<BigCard lang={lang}/>}/>

                        <Route exact path="/gallery_cards" element={<CardsByGallery lang={lang}/>}/>

                        {/*<Route exact path="/catalog" element={<Catalog lang={lang}/>}/>*/}

                        {/*<Route exact path="/contact_me" element={<ContactMe lang={lang}/>}/>*/}

                        {/*<Route exact path="/gallery" element={<Gallery lang={lang}/>}/>*/}

                    </Routes>
                </Router>
                <Footer lang={lang}/>

            </div>

    );
}

export default App;

