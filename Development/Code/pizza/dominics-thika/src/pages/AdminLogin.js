import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserShield, FaLock } from 'react-icons/fa';

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  min-width: 320px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  background: #ff6b35;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;
  &:hover {
    background: #e55a2b;
  }
`;

const ErrorMsg = styled.div`
  color: #e74c3c;
  margin-bottom: 1rem;
  text-align: center;
`;

const AdminLogin = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (data.success && data.data.token) {
        localStorage.setItem('adminToken', data.data.token);
        navigate('/admin');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title><FaUserShield /> Admin Login</Title>
        {error && <ErrorMsg>{error}</ErrorMsg>}
        <InputGroup>
          <Label htmlFor="username"><FaUserShield /> Username</Label>
          <Input id="username" name="username" value={form.username} onChange={handleChange} required />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password"><FaLock /> Password</Label>
          <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
        </InputGroup>
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default AdminLogin; 