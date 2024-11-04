import React, { useState } from 'react';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full transform transition duration-500"
           style={{ transform: isLogin ? "translateY(0)" : "translateY(-20px)" }}>
        <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>
        <form className="space-y-6">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button type="submit" className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <div className="text-center mt-5">
          <button onClick={toggleForm} className="text-indigo-600 hover:text-indigo-700 transition font-medium">
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
