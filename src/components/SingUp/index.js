import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons
function Signup() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <section className="register py-12 w-full max-w-md">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <p className="text-lg mt-2">Register in advance and enjoy the event benefits</p>
                    </div>

                    <Tabs>
                        <TabList className="flex space-x-4 justify-center">
                            <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
                                <h6 className="text-lg font-medium">Email</h6>
                            </Tab>
                            <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
                                <h6 className="text-lg font-medium">Mobile</h6>
                            </Tab>
                        </TabList>

                        <TabPanel className="border p-4 bg-white shadow-lg rounded-md mt-4">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block font-medium">
                                        Email/ID
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="block w-full p-2 border rounded-md mt-2"
                                        placeholder="Please fill in the email form."
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block font-medium">
                                        Password <span className="text-sm">(8 or more characters, including numbers and special characters)</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="block w-full p-2 border rounded-md mt-2"
                                        placeholder="Please enter a password."
                                    />
                                    <input
                                        type="password"
                                        className="block w-full p-2 border rounded-md mt-2"
                                        placeholder="Please re-enter your password."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Signup
                                </button>

                                <div className="flex justify-between items-center mt-4">
                                    <p>Already have an account?</p>
                                    <Link to="/login" className="text-blue-600">Login</Link>
                                </div>
                            </form>
                        </TabPanel>

                        <TabPanel className="border p-4 bg-white shadow-lg rounded-md mt-4">
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="mobile" className="block font-medium">
                                        Mobile Phone
                                    </label>
                                    <div className="flex space-x-4 mt-2">
                                        <select className="p-2 border rounded-md" id="mobile-code">
                                            <option>+1</option>
                                            <option>+84</option>
                                            <option>+82</option>
                                            <option>+32</option>
                                        </select>
                                        <input
                                            type="text"
                                            id="mobile"
                                            className="flex-1 p-2 border rounded-md"
                                            placeholder="Your Phone number"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="mobile-password" className="block font-medium">
                                        Password <span className="text-sm">(8 or more characters, including numbers and special characters)</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="mobile-password"
                                        className="block w-full p-2 border rounded-md mt-2"
                                        placeholder="Please enter a password."
                                    />
                                    <input
                                        type="password"
                                        className="block w-full p-2 border rounded-md mt-2"
                                        placeholder="Please re-enter your password."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Signup
                                </button>

                                <div className="flex justify-between items-center mt-4">
                                    <p>Already have an account?</p>
                                    <Link to="/login" className="text-blue-600">Login</Link>
                                </div>
                            </form>
                        </TabPanel>
                        <div className="my-8  text-center">
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
                    </Tabs>

                </div>
            </section>
        </div>
    );
}

export default Signup;
