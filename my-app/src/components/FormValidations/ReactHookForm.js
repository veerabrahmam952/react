import React from "react";
import {useForm } from 'react-hook-form';

function ReactHookForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted with data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>User Name:</label>
                <input
                   {...register("username", {
                    required: "User Name is Required",
                    minLength: {value: 5, message: "User Name must be at least 5 characters"}
                   })}
                />
                {errors.username && <p style={{color: 'red'}}>{errors.username.message}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Email is invalid"
                    }
                  })}
                  />
                {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ReactHookForm;