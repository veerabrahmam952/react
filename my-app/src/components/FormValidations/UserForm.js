import React from "react";

function UserForm() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        number:  '',
    });

    const [errors, setErrors] = React.useState({
        name: {
            required: '',
            nameLength: ''
        },
        email: {
            required: '',
            invalid: ''
        },
        number: ''
    });

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validate(data) {
        console.log('Validating data:', data);
        const newErrors = {
            "name": {
                required: '',
                nameLength: ''
            },
            "email": {
                required: '',
                invalid: ''
            },
            "number": ''
        };
        if(data.name.trim() === '') {
            newErrors.name.required = 'Name is Required';
        }
        if(data.name.length < 10) {
            newErrors.name.nameLength = 'Name must be at least 10 characters';
        }
        if(data.email.trim() === '') {
            newErrors.email.required = 'Email is Required';
        }
        if(!validateEmail(data.email)) {
            newErrors.email.invalid = 'Email is invalid';
        }
        if(data.number.trim() === '') {
            newErrors.number = 'Number is Required';
        }
        return newErrors;
    } 

    function handleOnchnage(event) {
        const {name, value} = event.target;
        const updateFormData = {...formData, [name]: value}
        setFormData(updateFormData);
        const newErrors = validate(updateFormData);
        setErrors(newErrors);
    }

    return(
        <>
        <input 
           type="text"
           name="name"
           value={formData.name}
           placeholder="Enter your name"
           onChange={handleOnchnage}
        />
        {errors.name.required && <p style={{color: 'red'}}>{errors.name.required}</p>}
        {errors.name.nameLength && <p style={{color: 'red'}}>{errors.name.nameLength}</p>}
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleOnchnage}
        />
        {errors.email.required && <p style={{color: 'red'}}>{errors.email.required}</p>}
        {errors.email.invalid && <p style={{color: 'red'}}>{errors.email.invalid}</p>}
        <input
          type="text"
          name="number"
          value={formData.number}
          placeholder="Enter your number"
          onChange={handleOnchnage}
        />
        {errors.number && <p style={{color: 'red'}}>{errors.number}</p>}
        </>
    )
}

function HtmlForm() {
    
    return(
        <form>
            <input 
               type="text"
               name="name"
               placeholder="Enter your name"
               required="true"
               maxLength={20}
               minLength={10}
               pattern=""
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
             required="true"
            />
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              required="true"
              min={10}
              max={100}
            />
             <button type="submit">Submit</button>
        </form>
    )
}

export{ UserForm, HtmlForm };