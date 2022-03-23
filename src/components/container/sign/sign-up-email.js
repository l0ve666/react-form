import React from 'react';
import {useForm} from "react-hook-form";

function SignUpEmail() {
    const {
        register,
        formState: {errors},
    } = useForm({
        mode: "onBlur"
    });
    return (
        <>
            <input type='email'
                   {...register('email', {
                       required: true,
                       message: 'Fill a real email'
                   })}
                   placeholder={`Email`}
            />
            <div>
                <div style={{height: 20, color:"red"}}>{
                    errors?.email && <p>{errors?.email.message || 'Fill up Email Field!'}</p>}
                </div>
            </div>
        </>
    )

}

export default SignUpEmail;