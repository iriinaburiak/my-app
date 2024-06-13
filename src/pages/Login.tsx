// src/pages/Login.tsx
import React, { useState } from 'react';
import { useAuth } from '../shared/components/hooks/useAuth';
import Layout from '../shared/components/Layout';
import Input from '../shared/components/Input';
import Button from '../shared/components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleSubmit = () => {
    login(username, password).subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
    });
  };

  return (
    <Layout>
      <h1>Login</h1>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Layout>
  );
};

export default Login;

