import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username: email,
        password: password
      });
      localStorage.setItem('access', res.data.access);
      alert("Connexion réussie");
    } catch (err) {
      alert("Échec de la connexion");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  );
}
