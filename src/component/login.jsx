import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must include at least one capital letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must include at least one small letter');
      return;
    }
    if (!/\d/.test(password)) {
      setError('Password must include at least one number');
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError('Password must include at least one symbol');
      return;
    }
    
    setShowOtp(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!otp || otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }
    setIsLoading(true);
   
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
    }, 1500);
  };

  const handleSocialLogin = () => {
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
   
    }, 1500);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">Login Successful!</h2>
            <p className="mt-4">Ready to play!</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">Game Login</h2>
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded mb-4" role="alert">
                {error}
              </div>
            )}
            {showOtp ? (
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-6">
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    Enter OTP (6-digit code)
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter 6-digit code"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </form>
            ) : (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-required="true"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </form>
                <div className="mt-6">
                  <p className="text-center text-sm mb-4">Or sign in with</p>
                  <button
                    onClick={handleSocialLogin}
                    
                    disabled={isLoading}
                  >
                    
                  </button>
                </div>
                <p className="mt-4 text-center text-sm">
                  Don't have an account?{' '}
                  <a href="#" className="text-blue-500 hover:underline">
                    Sign up
                  </a>
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;