import React from 'react';
import {useForm} from "react-hook-form";


function SignUpText() {
    const {
        register,
        formState: {errors},
    } = useForm({
        mode: "onBlur"
    });

    return (
        <>
            <input type='text'
                   {...register('firstName', {
                       required: true,
                       minLength: {
                           value: 3,
                           message: 'At least 3 symbols'
                       },
                   })}
                   placeholder={`Name`}

            />
            <div>
                <div style={{height: 20, color:"red"}}>{errors?.firstName &&
                    <p>{errors?.firstName.message || 'Fill up Name Field!'}</p>}</div>
            </div>
        </>
    )
}

export default SignUpText;