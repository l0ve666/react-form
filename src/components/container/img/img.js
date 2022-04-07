import instagram from './Instagram01.png'
import google from './google.png'
import facebook from './facebook.png'
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