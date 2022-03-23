import React from 'react';
import {useForm} from "react-hook-form";

function SignUpPassword() {
    const {
        register,
        formState: {errors},
    } = useForm({
        mode: "onBlur"
    });

    return (
        <>
            <div>

                <input type='password'
                       {...register('password', {
                           required: true,
                           minLength: {
                               message: 'At least 3 symbols',
                               value: 3,
                           }
                       })}
                       placeholder={`Password`}

                />
                <div style={{height: 20, color:"red"}}>{
                    errors?.password && <p>{errors?.password.message || 'Fill up Password Field!'}</p>}
                </div>
            </div>

        </>
    )
}

export default SignUpPassword;