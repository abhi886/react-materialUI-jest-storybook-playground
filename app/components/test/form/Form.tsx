import { Button, TextField } from '@mui/material';
import React from 'react';
import {useState} from "react";


const Form = () => {
    const [inputs, setInputs] = useState({firstName:"", lastName:"", email:"", password:""});
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({
            ...prevState, 
            [e.target.name]:[e.target.value]
        }))
    }
  return (
    <form onSubmit={(e)=> {e.preventDefault();
        console.log(inputs);
    }}>
        <TextField name="firstName" value={inputs.firstName} variant='outlined' type="text" onChange={handleChange}>First Name</TextField>
        <TextField name="lastName" value={inputs.lastName} variant='outlined' type="text" onChange={handleChange}>Last Name</TextField>
        <TextField name="email" value={inputs.email} variant='outlined' type="email" onChange={handleChange}>Email</TextField>
        <TextField name="password" value={inputs.password} variant='outlined' type="password" onChange={handleChange}>Password</TextField>
        <Button variant='outlined' type='submit'>Log In</Button>
    </form>  )
}

export default Form