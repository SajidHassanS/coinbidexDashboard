// pages/login.js
"use client"
// pages/login.js
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js for routing
import { useAuth } from '../authContext'; // Import the useAuth hook
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons
import { useRouter } from 'next/router';
function Login() {
    const { login } = useAuth(); // Use the useAuth hook to access login function

    const router = useRouter(); // Initialize useRouter

    const handleLogin = () => {
        // Perform login logic, then call the login function
        // Assuming login() returns a boolean indicating successful login
        const loggedIn = login(); // Replace login() with your actual login logic

        if (loggedIn) {
            // Redirect to the home page after successful login
            router.push('/'); // Change '/' to the actual path of your home page
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <section className="login p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <p className="text-lg">Welcome back! Log in now to start trading.</p>
                        <div className="mt-4 bg-blue-500 p-4 rounded-lg text-center text-white">
                            <div className="flex items-center justify-center mb-2">
                                <svg
                                    width="16"
                                    height="20"
                                    viewBox="0 0 16 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.00004 11.7578C7.67672 11.7578 7.41406 12.0205 7.41406 12.3438C7.41406 12.6671 7.67672 12.9298 8.00004 12.9298C8.32336 12.9298 8.58602 12.6671 8.58602 12.3438C8.58602 12.0205 8.32336 11.7578 8.00004 11.7578Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M11.5162 8.24219H4.2187C2.10011 8.24219 0.382568 9.95965 0.382568 12.0783C0.382568 15.6973 2.78413 19.0605 6.32241 19.8205C11.2508 20.8791 15.618 17.0922 15.618 12.344C15.618 10.0787 13.7816 8.24219 11.5162 8.24219ZM8.58628 13.9941V17.071C8.58628 17.3949 8.32417 17.657 8.0003 17.657C7.6764 17.657 7.41433 17.3949 7.41433 17.071V13.9941C6.73374 13.7514 6.24237 13.107 6.24237 12.3441C6.24237 11.3747 7.03093 10.5861 8.0003 10.5861C8.96968 10.5861 9.75823 11.3747 9.75823 12.3441C9.75823 13.107 9.26686 13.7513 8.58628 13.9941Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M8.00039 0C5.08223 0 2.72656 2.35562 2.72656 5.27383V7.3234C3.20102 7.17391 3.69582 7.07086 4.21898 7.07086H5.07051V5.27383C5.07051 3.65652 6.38309 2.34395 8.00039 2.34395C9.6177 2.34395 10.9303 3.65652 10.9303 5.27383V7.07082H11.5163C12.1356 7.07082 12.7216 7.19777 13.2742 7.3948V5.27383C13.2742 2.35844 10.9128 0 8.00039 0Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <Tabs>
                        <TabList className="flex justify-center space-x-4">
                            <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
                                <h6 className="text-lg font-medium">Email</h6>
                            </Tab>
                            <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
                                <h6 className="text-lg font-medium">Mobile</h6>
                            </Tab>
                        </TabList>

                        <TabPanel className="mt-4">
                            <div className="content-inner">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2" htmlFor="exampleInputEmail1">
                                            Email/ID
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control w-full border border-gray-300 p-2 rounded-md"
                                            id="exampleInputEmail1"
                                            placeholder="Please fill in the email form."
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Password</label>
                                        <input
                                            type="password"
                                            className="form-control w-full border border-gray-300 p-2 rounded-md"
                                            placeholder="Please enter a password."
                                        />
                                    </div>

                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm"
                                            />
                                            <label className="form-check-label ml-2 text-sm">
                                                Remember Me
                                            </label>
                                        </div>
                                        <Link href="/forgot-password" className="text-sm text-blue-500">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                        onClick={handleLogin} // Call handleLogin on button click
                                    >
                                        Login
                                    </button>

                                    <div className="mt-4 text-center">
                                        <p>Not a member?</p>
                                        <Link href="/signup" className="text-blue-500 hover:underline">
                                            Signup
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>

                        <TabPanel className="mt-4">
                            <div className="content-inner">
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2" htmlFor="exampleInputEmail1">
                                            Mobile Phone
                                        </label>
                                        <div className="flex space-x-2 items-center">
                                            <select
                                                className="w-20 border border-gray-300 p-2 rounded-md"
                                                id="exampleFormControlSelect1"
                                            >
                                                <option>+1</option>
                                                <option>+84</option>
                                                <option>+82</option>
                                                <option>+32</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="form-control w-full border border-gray-300 p-2 rounded-md"
                                                placeholder="Your Phone number"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium mb-2">Password</label>
                                        <input
                                            type="password"
                                            className="form-control w-full border border-gray-300 p-2 rounded-md"
                                            placeholder="Please enter a password."
                                        />
                                    </div>

                                    <div className="mb-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-check-input h-4 w-4 border border-gray-300 rounded-sm"
                                            />
                                            <label className="form-check-label ml-2 text-sm">
                                                Remember Me
                                            </label>
                                        </div>
                                        <Link href="/forgot-password" className="text-sm text-blue-500">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                                        onClick={handleLogin} // Call handleLogin on button click
                                    >
                                        Login
                                    </button>

                                    <div className="mt-4 text-center">
                                        <p>Not a member?</p>
                                        <Link href="/signup" className="text-blue-500 hover:underline">
                                            Signup
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </TabPanel>
                    </Tabs>

                    {/* Divider */}
                    <div className="my-8 border-b border-gray-300 text-center">
                        <span>OR</span>
                    </div>
                    {/* Social login icons */}
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
