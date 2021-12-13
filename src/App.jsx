import React from "react";
import Form from "./Form";
import { Routes ,Route } from 'react-router-dom';
import Submit from "../src/Submit";

const App = () => {
    return(
        <>
            <div id="main">
            <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
                <div id="main1">
                    <div id="mainleft">
                        
                        
                        
                    </div>
                    <div id="mainright">
                        
                        <div id="formm">
                    <Routes>
                <Route exact path='/' element={<Form/>} />
                <Route path='/Submit' element={<Submit/>} />
                </Routes>
                        </div>
                    </div>

                </div>
                
            </div>
             {/* <Routes>
                <Route exact path='/' element={<Form/>} />
                <Route path='/submit' element={<Submit/>} />
                </Routes> */}
           
        </>
    );
}

export default App;