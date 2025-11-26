import React, { useState } from "react";

function Form() {
    
    const [form, setForm] = useState({
        isAgreed: false,
        name: '',
        role: 'user',
        subScription: '',
        
    });

    const [errors, setErrors] = useState({});
    
    function handleChange(event) {
       //Update the form
       const {name, value, type, checked} = event.target;

       setForm(prevForm => ({
        ...prevForm,
        [name]: type === 'checkbox' ? checked : value,
       }));
    }

    function validate(formdata) {
        let errs = {};

        if(!formdata.name.trim()){
            errs.name = 'Name is required'
        }

        if(!formdata.subScription) {
            errs.subScription = 'Please choose subcription'
        }

        if(!formdata.isAgreed) {
            errs.isAgreed = 'You mus agree the condtions'
        }

        return errs;
    }

    function handleSubmit(event) {
       event.preventDefault();
       const validationErrors = validate(form)
       setErrors(validationErrors);
       alert('hi');
    }

    return(
          <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            />

            {errors.name && <p>{errors.name}</p>}

            <label htmlFor="role">Role: </label>
            <select
              id="role"
              name="role"
              value={form.role}
              onChange={handleChange}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="guest">Guest</option>
            </select>

            <label htmlFor="subScription">SubScription</label>
            <label>
                <input
                  type="radio"
                  name="subScription"
                  value="monthly"
                  checked={form.subScription === 'monthly'}
                  onChange={handleChange}
                  />
                  Monthly
            </label>
            <label>
                <input
                  type="radio"
                  name="subScription"
                  value="yearly"
                  checked={form.subScription === 'yearly'}
                  onChange={handleChange}
                  />
                  Yearly
            </label>
            {errors.subScription && <p>{errors.subScription}</p>}

            <label>
                <input
                  type="checkbox"
                  name="isAgreed"
                  checked={form.isAgreed}
                  onChange={handleChange}
                  />
                  I Agree terms and conditions
            </label>
            {errors.isAgreed && <p>{errors.isAgreed}</p>}

             {/* <p>
                {form.isAgreed ? 'Checked': 'Not Checked'}
                <br />
                {form.name}
                <br />
                {form.role}
                <br />
                {form.subScription}
                
            </p> */}
            <button disabled={!errors} type="submit">Submit Form</button>
        </form>
    )
}

export default Form;