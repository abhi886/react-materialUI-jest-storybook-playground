import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import Input from '../../core/input/Input';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import InputContainer from '../../core/inputContainer/InputContainer';
import { SelectChangeEvent } from '@mui/material/Select';


const LoginForm = styled('form')`
  border-radius: 30px;
  margin: 0px;
  padding: 20px;
  width: 30rem;
  height: auto;
`;

type inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  qualificaton: 
   { 
    SLC: boolean,
    highSchool: boolean
   }
   age: number;
}

const Form = () => {
  const [inputs, setInputs] = useState<inputs>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    qualificaton: {
      SLC: false,
      highSchool: false,
    },
    age: 10,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setInputs((prevState) => ({
      ...prevState,
      qualificaton: {
        ...prevState.qualificaton,
        [name]: checked,
      },
    }));
  };

  const validate = () => {
    const newErrors: typeof errors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
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

    setErrors(newErrors);
    return isValid;
  };

  return (
    <LoginForm
      onSubmit={(e) => {
        e.preventDefault();
        if (validate()) {
          console.log('Form submitted:', inputs);
        }
      }}
    >
      <Typography variant="h5" sx={{ color: 'blue', marginBottom: '5px' }}>
        Login Form
      </Typography>
      <InputContainer>
        <Input
          name="firstName"
          id="firstname"
          label="First Name"
          variant="outlined"
          fullWidth
          value={inputs.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          slotProps={{
            htmlInput: {
              'data-testid': 'loginForm-username',
            },
          }}
          type="text"
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="lastName"
          id="lastname"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={inputs.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          type="text"
          error={!!errors.lastName}
          helperText={errors.lastName}
          slotProps={{
            htmlInput: {
              'data-testid': 'loginForm-lastname',
            },
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="email"
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={inputs.email}
          onChange={handleChange}
          placeholder="Enter your email"
          type="email"
          error={!!errors.email}
          helperText={errors.email}
          slotProps={{
            htmlInput: {
              'data-testid': 'loginForm-email',
            },
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          name="password"
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={inputs.password}
          onChange={handleChange}
          placeholder="Enter your password"
          type="password"
          error={!!errors.password}
          helperText={errors.password}
          slotProps={{
            htmlInput: {
              'data-testid': 'loginForm-password',
            },
          }}
        />
      </InputContainer>

      <Typography variant="subtitle1"> Your Qualification</Typography>
      <FormGroup>
        <FormControlLabel
          value={inputs.qualificaton.SLC}
          required
          control={<Checkbox name="SLC" onChange={handleCheckboxChange} />}
          label="SLC"
        />
        <FormControlLabel
          value={inputs.qualificaton.highSchool}
          control={
            <Checkbox name="highSchool" onChange={handleCheckboxChange} />
          }
          label="High School"
        />
      </FormGroup>

      <InputContainer>
        <FormControl fullWidth>
          <InputLabel id="login-age">Age</InputLabel>
          <Select
            labelId='login-age'
            id="login-form-select-age"
            name="age"
            value={inputs.age.toString()}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </InputContainer>
     
      <Button variant="contained" type="submit">
        Log In
      </Button>
    </LoginForm>
  );
};

export default Form;
