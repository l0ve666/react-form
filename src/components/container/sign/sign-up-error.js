import React from 'react';
import {useForm} from "react-hook-form";

function SignUpError(){
    const {
        formState: {errors},
    } = useForm({
        mode: "onBlur"
    });
    return(
        <>
            <div style={{height: 40}}>{
                errors?.firstName && <p>{errors?.firstName.message || 'Fill up Name Field!'}</p> ||
                errors?.email && <p>{errors?.email.message || 'Fill up Email Field!'}</p> ||
                errors?.password && <p>{errors?.password.message || 'Fill up Password Field!'}</p>
            }</div>
        </>
    )
}

export default SignUpError;