import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const LoginForm = styled.form`
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

function App() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Wrapper>
      <LoginForm onSubmit={handleFormSubmit}>
        <Title>Log In</Title>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Enter your username" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </Wrapper>
  );
}

export default App;
