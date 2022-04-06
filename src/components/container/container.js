import React from 'react';
import "./container.css";
import {createAccount, infoLoginRight, infoLoginLeft, btn} from '../modules/animation'
import containerClick from "../modules/activeanim";
import {useForm} from 'react-hook-form'
import SignUpText from "./sign/sign-up-text";
import SignUpEmail from "./sign/sign-up-email";
import SignUpPassword from "./sign/sign-up-password";
import Img from "./img";

//sa fac reverse la input sa le scot inapoi aici pentru a face button disabled

function Container() {

    const {
        formState: {},
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        let allData = {
            "name": data.target[0].value,
            "email": data.target[1].value,
            "password": data.target[2].value
        }

        console.log(JSON.stringify(allData));
        data.preventDefault()

        const fetchData = async () => {
            await fetch(`http://localhost:8000/users`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(allData)
            }).then(res => res.json())
                .then(user => {
                    console.log(`user created success`, user)
                    const data2 =  JSON.stringify(user)
                    localStorage.setItem(`info`,data2)
                })
        }

        fetchData()
    }
    const onLogin = (data) => {
        data.preventDefault()

    }


    return (
        <div className={"container"}>
            <div className="account create-account">
                <form action="#" id="form" onSubmit={onSubmit}>
                    <h1 className="info-login">{createAccount.title}</h1>
                    <Img/>
                    <p className="text">{createAccount.subTitle}</p>
                    <SignUpText/>
                    <SignUpEmail/>
                    <SignUpPassword/>
                    <button className="sign-Up" type="submit">{createAccount.button}</button>
                </form>
            </div>
            <div className="account singIn">
                <form action="#" className="form" onSubmit={onLogin} id={'form'}>
                    <h1 className="info-login">{btn.title}</h1>
                    <Img/>
                    <input type="email" placeholder={`Email`}/>
                    <input type="password" placeholder={`Password`}/>

                    <a href="#" className="forgot-password">{btn.footer}</a>
                    <button className="sign-In" type="submit">{btn.button}</button>
                </form>
            </div>
            <div className="welcome-info">
                <div className="info">
                    <div className="welcome-account-info left">
                        <h1 className="info-login">{infoLoginLeft.title}</h1>
                        <p>{infoLoginLeft.subTitle}</p>
                        <button className="btn signIn" onClick={containerClick}>{infoLoginLeft.button}</button>
                    </div>
                    <div className="welcome-account-info right">
                        <h1 className="info-login">{infoLoginRight.title}</h1>
                        <p>{infoLoginRight.subTitle}</p>
                        <button className="btn signUp"
                                onClick={containerClick}>{infoLoginRight.button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;