"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [code, setCode] = useState('+1');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const loginData = {
      email,
      password,
      mobile: code + mobile,
    };

    try {
      const response = await axios.post(
        'https://imdfx-newserver-production.up.railway.app/api/coinbdixlogin',
        loginData
      );
            console.log(response.data)
            const token = response.data
            localStorage.setItem("token", token.userId)
            onLoginSuccess()
      if (response.status === 200) {
        // Successful login, inform the parent component
        onLoginSuccess(); // Call the success callback
        router.push('/personalwallet'); // Redirect on success
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <section className="login p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold">Welcome Back!</h2>
          <p>Log in to continue.</p>
        </div>

        <form onSubmit={handleLogin}>
          <Tabs>
            <TabList className="flex justify-center space-x-4">
              <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:bg-blue-500">
                Email
              </Tab>
              <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:bg-blue-500">
                Mobile
              </Tab>
            </TabList>

            {/* Email login */}
            <TabPanel className="mt-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email/ID</label>
                <input
                  type="email"
                  className="form-control w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="form-control w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-check-input h-4 w-4 border border-gray-300 rounded-sm"
                  />
                  <span className="text-sm">Remember Me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-blue-500">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                disabled={isLoading}
              >
                {isLoading ? 'Logging In...' : 'Login'}
              </button>

              <div className="mt-4 text-center">
                <p>Not a member?</p>
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Signup
                </Link>
              </div>

              {error && (
                <div className="text-red-500 text-center mt-4">
                  {error}
                </div>
              )}
            </TabPanel>

            {/* Mobile login */}
            <TabPanel className="mt-4">
              <div>
                <label className="block text-sm font-medium mb-2">Mobile Phone</label>
                <div className="flex space-x-2 items-center">
                  <select
                    className="w-20 border border-gray-300 p-2 rounded-md"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  >
                    <option>+1</option>
                    <option>+84</option>
                    <option>+82</option>
                    <option>+32</option>
                  </select>

                  <input
                    type="text"
                    className="form-control w/full border border-gray-300 p-2 rounded-md"
                    placeholder="Your phone number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="form-control w/full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                disabled={isLoading}
              >
                {isLoading ? 'Logging In...' : 'Login'}
              </button>

              {error && (
                <div className="text-red-500 text-center mt-4">
                  {error}
                </div>
              )}
            </TabPanel>
          </Tabs>

          <div className="my-8 border-b border-gray-300 text-center">
            <span>OR</span>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              FaTwitter
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              FaInstagram
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
