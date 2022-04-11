import React from 'react';
import "./container.css";
import {createAccount, infoLoginRight, infoLoginLeft, btn} from '../modules/animation'
import containerClick from "../modules/activeanim";
import {useForm} from 'react-hook-form'
import Img from "./img/img";
import {useNavigate} from 'react-router-dom'

//btn
//info sub login
//optimizarea codului


function Container() {

    const {
        register,
        formState: {errors, isValid},
        reset
    } = useForm({
        mode: "onChange"

    });

    let dashboard = useNavigate()
    const redirectDashboard = () => {
        dashboard('/dashboard')
    }

    let success = useNavigate()
    const redirectSuccess = () => {
        success('/success')
    }


    const fetchData = async (allData) => {
        await fetch(`http://localhost:8000/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(allData)
        }).then(res => res.json())
            .then(user => {
                console.log(`user created success`, user)
                const data2 = JSON.stringify(user)
                localStorage.setItem(`info`, data2)
                redirectSuccess()
            })

    }

    const filterEmail = async (allData) => {
        await fetch(`http://localhost:8000/users`, {
            method: 'get',
        }).then(res => res.json())
            .then(data => {
                let exists = false
                data.map(ind => {
                        if (ind.email === allData.email) {
                            // console.log(`mail already exists`, ind.email, ` `, allData.email)
                            exists = true
                        }
                    }
                )
                if (exists === false) {
                    fetchData(allData)
                }
            })
    }


    const onSubmit = (data) => {

        let allData = {
            name: document.querySelector('.value-name').value,
            email: document.querySelector('.value-email').value,
            password: document.querySelector('.value-password').value
        }

        console.log(allData);
        data.preventDefault()

        filterEmail(allData)

        reset()
    }

    const onLogin = (data) => {
        data.preventDefault()

        let loginData = {
            email: document.querySelector(`.value-log-email`).value,
            password: document.querySelector(`.value-log-password`).value,
        }

        const infoData = localStorage.getItem('info')

        const fetchData = () => {
            fetch(`http://localhost:8000/users`, {
                method: 'GET',
            }).then(res => res.json())
                .then(user => {
                    let exists = false
                    user.map((type) => {
                        if (type.email === loginData.email && type.password === loginData.password) {
                            console.log(true)
                            let asd = JSON.stringify(type)
                            localStorage.setItem(`newInfo`, asd)
                            exists = true
                            redirectDashboard()
                        }

                    })
                    if(exists === false){
                        console.log(`user falied l0g1H)`)
                    }
                })
        }

        fetchData()

    }

    return (

        <div>
            <div className={'popup-alert hidden'}><p>asd</p></div>
            <div className={"container"}>
                <div className="account create-account">
                    <form action="#" id="form" onSubmit={onSubmit}>
                        <h1 className="info-login">{createAccount.title}</h1>
                        <Img/>
                        <p className="text">{createAccount.subTitle}</p>
                        <>
                            <input type='text'
                                   {...register('firstName', {
                                       required: true,
                                       minLength: {
                                           value: 3,
                                           message: 'At least 3 symbols'
                                       },

                                   })}
                                   placeholder={`Name`} className={'value-name'}

                            />
                            <div>
                                <div style={{height: 20, color: "red"}}>{errors?.firstName &&
                                    <p>{errors?.firstName.message || 'Fill up Name Field!'}</p>}</div>
                            </div>
                        </>
                        <>
                            <input type='email'
                                   {...register('email', {
                                       required: true,
                                       pattern: {
                                           value: /\S+@\S+\.\S+/
                                       },
                                       message: "Entered value does not match email format"
                                   })}
                                   placeholder={`Email`} className={'value-email'}
                            />
                            <div>
                                <div style={{height: 20, color: "red"}}>{
                                    errors?.email &&
                                    <p>{errors?.email.message || 'Entered value does not match email format'}</p>}
                                </div>
                            </div>
                        </>
                        <div>

                            <input type='password'
                                   {...register('password', {
                                       required: true,
                                       minLength: {
                                           message: 'At least 6 characters',
                                           value: 6,
                                       }
                                   })}
                                   placeholder={`Password`} className={'value-password'}

                            />
                            <div style={{height: 20, color: "red", marginLeft: 88}}>{
                                errors?.password && <p>{errors?.password.message || 'At least 6 characters'}</p>}
                            </div>
                        </div>
                        <button className="sign-Up" disabled={!isValid}
                                type="submit">{createAccount.button}</button>
                    </form>
                </div>
                <div className="account singIn">
                    <form action="#" className="form" onSubmit={onLogin} id={'form'}>
                        <h1 className="info-login">{btn.title}</h1>
                        <Img/>
                        <input type="email" placeholder={`Email`} className={'value-log-email'} />
                        <input type="password" placeholder={`Password`} className={'value-log-password'} />
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
        </div>
    );
}

export default Container;