import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData)
  };

  return (
   <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 border border-gray-300 w-full max-w-sm">
        {/* Judul Sederhana */}
        <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
          Login Inventaris
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Input Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-gray-600">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="nama@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          {/* Input Password */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1 text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-400 focus:outline-none focus:border-blue-500"
              placeholder="******"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          {/* Tombol Standar */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
          >
            Masuk
          </button>
        </form>

        {/* Footer Kecil */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Sistem Informasi Logistik v1.0
        </p>
      </div>
    </div>
  );
};

const login = () => {
  
}
export default LoginForm;