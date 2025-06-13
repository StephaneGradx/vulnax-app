// ✅ Login.jsx ou Register.jsx - Mise en page responsive adaptée 1920x1080
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username: email,
        password: password,
      });
      localStorage.setItem('access', res.data.access);
      alert("Connexion réussie");
      navigate('/dashboard');
    } catch (err) {
      alert("Échec de la connexion");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Image à gauche (masquée sur petits écrans) */}
      <div className="hidden lg:flex items-center justify-center bg-orange-500">
        <img
          src="/login-illustration.png"
          alt="Sécurité réseau"
          className="w-4/5 max-w-[600px] object-contain"
        />
      </div>

      {/* Formulaire à droite */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-orange-600">Connexion</h1>
            <p className="text-gray-500 text-sm mt-2">Ravi de vous revoir !</p>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Email ou nom d'utilisateur</label>
            <input
              type="text"
              placeholder="admin@vulnax.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 accent-orange-500" />
              Se souvenir de moi
            </label>
            <a href="#" className="text-orange-500 hover:underline">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            Se connecter
          </button>

          <p className="text-center text-sm text-gray-500">
            Vous n'avez pas de compte ?{' '}
            <Link to="/register" className="text-orange-500 hover:underline">Inscrivez-vous</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
