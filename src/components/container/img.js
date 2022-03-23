import instagram from './img/Instagram01.png'
import google from './img/google.png'
import facebook from './img/facebook.png'
import React from "react";

function Img(){
    return(
        <>
            <div className="icon-container">
                <a href="#" className="icon"><img alt="facebook" src={facebook}/></a>
                <a href="#" className="icon"><img alt="google" src={google}/></a>
                <a href="#" className="icon"><img alt="Instagram" src={instagram}/></a>
            </div>
        </>
    )
}

export default Img