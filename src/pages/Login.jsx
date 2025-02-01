import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const[iserror,setiseeror]=useState(false);
  const [error, setError] = useState('');

  const VALID_USERNAME = 'rupesh';
  const VALID_PASSWORD = 'mc';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === VALID_USERNAME && 
    credentials.password === VALID_PASSWORD) {
    alert('Successful login')
    setiseeror(false);
    } else {
    setiseeror(true);
    setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-white to-orange-100 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-300 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
          </div>
        </div>
        
        <h2 className="mt-8 text-center">
          <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent font-serif tracking-tight">
            Hotel Jagadamb
          </span>
          <p className="font-bold	 text-gray-600 mb-8 ">
          "स्वाद महाराष्ट्राचा, सेवा आमची – बसल्या जागेवर ऑर्डर करा, स्वादिष्ट जेवणाचा आनंद घ्या!"
            <br />          
          </p>
        </h2>
        
        <h3 className="mt-3 text-center text-xl text-gray-600 font-medium tracking-wide">
          Admin Panel
        </h3>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white/80 backdrop-blur-lg py-8 px-6 shadow-2xl rounded-2xl sm:px-10 border border-white/20">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-2 group">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg"
                  value={credentials.username}
                  onChange={(e) => setCredentials({
                    ...credentials,
                    username: e.target.value
                  })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-2 group">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white/50 backdrop-blur-sm group-hover:shadow-lg"
                  value={credentials.password}
                  onChange={(e) => setCredentials({
                    ...credentials,
                    password: e.target.value
                  })}
                />
              </div>
            </div>

            {iserror && (
              <div className="bg-red-50 text-red-500 text-sm text-center py-2 px-4 rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100 to-transparent opacity-50"></div>
    </div>
  );
};

export default Login;