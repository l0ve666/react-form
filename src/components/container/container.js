import React from 'react';
import "./container.css";
import {createAccount, infoLoginRight, infoLoginLeft, btn} from '../modules/animation'
import containerClick from "../modules/activeanim";
import {useForm} from 'react-hook-form'
import SignUpText from "./sign/sign-up-text";
import SignUpEmail from "./sign/sign-up-email";
import SignUpPassword from "./sign/sign-up-password";
import Img from "./img";

function Container() {

    const {
        formState: {},
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        let alldata = [
            data.target[0].value,
            data.target[1].value,
            data.target[2].value
        ]
        console.log(alldata);
        data.preventDefault()
        reset()
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
                <form action="#" className="form" onSubmit={onSubmit} id={'form'}>
                    <h1 className="info-login">{btn.title}</h1>
                    <Img/>


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