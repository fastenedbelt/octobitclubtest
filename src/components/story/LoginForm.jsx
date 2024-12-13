import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';
import {
  Container,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  Button,
  SecurityNote
} from './styles/LoginForm.styles';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #FF0033;
  }
`;

const PasswordInput = ({ value, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputWrapper>
      <Input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        style={{ paddingRight: '45px' }}
        {...props}
      />
      <ToggleButton
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
      </ToggleButton>
    </InputWrapper>
  );
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accessCode: ''
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Access attempt:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <Title>SECURE ACCESS</Title>
      <Subtitle>AUTHORIZATION REQUIRED</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>AGENT NAME</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your agent name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>EMAIL</Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>ACCESS CODE</Label>
          <PasswordInput
            name="accessCode"
            placeholder="Enter access code"
            value={formData.accessCode}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <Button type="submit">
          INITIATE ACCESS SEQUENCE
        </Button>
      </Form>

      <SecurityNote>
        WARNING: Unauthorized access attempts will be logged and reported to system administrators.
        All actions are monitored and recorded.
      </SecurityNote>
    </Container>
  );
};