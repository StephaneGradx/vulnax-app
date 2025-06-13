import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username: email,
        password: password,
      });
      localStorage.setItem('access', res.data.access);
      alert("Connexion réussie");
    } catch (err) {
      alert("Échec de la connexion");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      
      {/* Partie gauche avec image */}
      <div className="hidden md:flex items-center justify-center bg-orange-500">
        <img src="/login-illustration.png" alt="Sécurité réseau" className="w-3/4" />
      </div>

      {/* Partie droite avec formulaire */}
      <div className="flex items-center justify-center p-10 bg-white">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-orange-600">Connexion</h1>
            <p className="text-gray-500 text-sm mt-2">Ravi de vous revoir ! Connectez-vous à Vulnax</p>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Nom d'utilisateur ou email</label>
            <input
              type="text"
              placeholder="admin@vulnax.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-700">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm mt-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              <span className="text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-orange-500 hover:underline">Mot de passe oublié ?</a>
          </div>

          <button type="submit" className="w-full bg-orange-900 hover:bg-orange-600 text-white py-2 rounded-md font-bold mt-4">
            Se connecter
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Vous n'avez pas de compte ? <a href="#" className="text-orange-500 hover:underline">Inscrivez-vous</a>
          </p>
        </form>
      </div>
    </div>
  );
}
