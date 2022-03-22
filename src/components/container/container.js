import React, {Component} from 'react';
import "./container.css";
import {Form} from 'react-bootstrap'
import instagram from './img/Instagram01.png'
import google from './img/google.png'
import facebook from './img/facebook.png'
import {createAccount, infoLoginRight, infoLoginLeft, btn} from '../modules/animation'
import containerClick from "../modules/activeanim";
import contents from "../modules/inputs";
import { useForm } from 'react-hook-form'



class Container extends Component {
    render() {
        return (
            <div className={"container"}>
                <div className="account create-account">
                    <Form action="#" id="form">
                         <h1 className="info-login">{createAccount.title}</h1>
                        <div className="icon-container">
                            <a href="#" className="icon"><img alt="facebook" src={facebook}/></a>
                            <a href="#" className="icon"><img alt="google" src={google}/></a>
                            <a href="#" className="icon"><img alt="Instagram" src={instagram}/></a>
                        </div>
                        <p className="text">{createAccount.subTitle}</p>
                        {contents.inputs.map((input,key)=>{
                            return(
                                <div key={key}>
                                    <p>
                                        <label>{input.label}</label>
                                    </p>
                                    <p>
                                        <input name={input.name}/>
                                    </p>
                                </div>
                            )
                        })}
                        <span className="errorPassword invalid1"> </span>
                        <button className="sign-Up disabled" type="submit"
                                disabled="disabled">{createAccount.button}</button>
                    </Form>
                </div>
                <div className="account singIn">
                    <Form action="#" className="form">
                        <h1 className="info-login">{btn.title}</h1>
                        <div className="icon-container">
                            <a href="#" className="icon"><img alt="facebook" src={facebook}/></a>
                            <a href="#" className="icon"><img alt="google" src={google}/></a>
                            <a href="#" className="icon"><img alt="Instagram" src={instagram}/></a>
                        </div>
                        {contents.inputs.map((input,key)=>{
                            return(
                                <div key={key}>
                                    <p>
                                        <label>{input.password}</label>
                                    </p>
                                    <p>
                                        <input name={input.name}/>
                                    </p>
                                </div>
                            )
                        })}



                        {/*<p className="text">{btn.subTitle}</p>*/}
                        {/*<input className="sign_Input email-connecting field" type="email"*/}
                        {/*       placeholder="Email"*/}

                        {/*/>*/}
                        {/*<span className="error-Email invalid1"> </span>*/}
                        {/*<input className="sign_Input password-connecting field" type="password"*/}
                        {/*       placeholder="Password"*/}

                        {/*/>*/}
                        <span className="error-Password invalid1"> </span>
                        <a href="#" className="forgot-password">{btn.footer}</a>
                        <button className="sign-In" type="submit">{btn.button}</button>
                    </Form>
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
}


export default Container;
