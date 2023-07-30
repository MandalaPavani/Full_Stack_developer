import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: (adminId: string, password: string) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(adminId, password);
  };

  return (
    <div className="admin-login">
      <input
        type="text"
        placeholder="Admin ID"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
