import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/register/', {
        email,
        username,
        password
      });
      alert("Inscription réussie !");
    } catch (err) {
      alert("Erreur d'inscription");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">S'inscrire</button>
    </form>
  );
}
