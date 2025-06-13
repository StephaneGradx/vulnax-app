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
    <div className="w-screen h-screen flex">
      {/* Left image section */}
      <div className="w-1/2 h-full relative">
        <img
          src="images/Rectangle 64.png"
          alt="secure"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {/* Optionnel: Ajoute un logo ici si besoin */}
        </div>
      </div>

      {/* Right form section */}
      <div className="w-1/2 h-full flex flex-col justify-center px-32">
        <div className="flex items-center mb-6 space-x-2">
          <img src="/logo.svg" alt="Vulnax" className="w-12 h-12" />
          <h1 className="text-left font-bold text-gray-800">Connexion</h1>
        </div>

        <h2 className="text-left font-semibold mb-6 text-orange-600">Ravi de vous revoir !</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-left font-medium text-gray-600">E-mail</label>
            <input

              type="email"
              placeholder="info23@vulnax.com"
              disabled
              className="w-full mt-1 p-3 border border-gray-300 rounded bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-left font-medium text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="************"
              className="w-full mt-1 p-3 border border-gray-300 rounded"
            />
            <ul className="text-left text-gray-500 mt-2 space-y-1">
              <li className="text-gray-400">Au moins 8 caractères</li>
              <li className="text-gray-400"> Doit contenir des caractères spéciaux</li>
            </ul>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="remember" className="h-4 w-4 text-orange-600" />
            <label htmlFor="remember" className="text-sm text-gray-600">Se souvenir de moi</label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded "
          >
            Se connecter
          </button>
        </form>

<div className="text-left text-gray-600 mt-6">
          Vous n'avez pas de compte ? <a href="#" className="text-orange-600 font-semibold">Inscrivez-vous</a><br />
          <a href="#" className="text-left text-orange-500 font-semibold">Mot de passe oublié ?</a>
        </div>
      </div>
    </div>
  );
}