import { Button, TextField } from '@mui/material';
import React from 'react';
import {useState} from "react";


const Form = () => {
    const [inputs, setInputs] = useState({firstName:"", lastName:"", email:"", password:""});
     const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState, 
            [e.target.name]:[e.target.value]
        }))
    }

     const validate = () => {
    const newErrors: typeof errors = { firstName: '', lastName: '', email: '', password: '' };
    let isValid = true;

    if (!inputs.firstName) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!inputs.lastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!inputs.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!inputs.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (inputs.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  
  return (
    <form onSubmit={(e)=> {e.preventDefault();
         if (validate()) {
      console.log('Form submitted:', inputs);
      // Add actual submission logic here (e.g., API call)
    }
    }}>
        <TextField name="firstName" value={inputs.firstName} variant='outlined' type="text" onChange={handleChange} error={!!errors.firstName}
         helperText={errors.firstName}
        fullWidth
>First Name</TextField>
        <TextField name="lastName" value={inputs.lastName} variant='outlined' type="text" onChange={handleChange} error={!!errors.lastName}
         helperText={errors.lastName}
        fullWidth
>Last Name</TextField>
        <TextField name="email" value={inputs.email} variant='outlined' type="email" onChange={handleChange}         error={!!errors.email}
         helperText={errors.lastName}
        fullWidth
>Email</TextField>
        <TextField name="password" value={inputs.password} variant='outlined' type="password" onChange={handleChange}         error={!!errors.password}
         helperText={errors.password}
        fullWidth
>Password</TextField>
        <Button variant='outlined' type='submit'>Log In</Button>
    </form>  )
}

export default Form