"use client"; // Necessary for client-side rendering in Next.js
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"; // To send HTTP requests
import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing icons

function Signup() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // To capture error messages
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const router = useRouter();

  const handleEmailSignup = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (password !== confirmPassword) {
      setError("Passwords do not match."); // Check if passwords match
      return;
    }

    setIsLoading(true); // Start loading
    setError(null); // Clear any previous error

    const signupData = {
      email,
      password,
      number: code + mobile,
    };
console.log(signupData)
    try {
      const response = await axios.post(
        "https://imdfx-newserver-production.up.railway.app/api/coinbdixsignup",
        signupData // Update with your actual API endpoint
      );
      console.log(response);
      if (response.status === 200) {
        // Successfully signed up
        router.push("/login"); // Redirect to login page
      } else {
        throw new Error("Signup failed"); // For non-201 statuses
      }
    } catch (err) {
      setError("Signup failed. Please check your inputs and try again."); // General error message
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleMobileSignup = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (password !== confirmPassword) {
      setError("Passwords do not match."); // Check if passwords match
      return;
    }

    setIsLoading(true); // Start loading
    setError(null); // Clear any previous error

    const signupData = {
      mobile: code + mobile, // Concatenated mobile with country code
      password,
    };
  console.log(signupData)
    // try {
    //   const response = await axios.post(
    //     "https://imdfx-newserver-production.up.railway.app/api/coinbdixsignup",
    //     signupData // Update with your actual API endpoint
    //   );

    //   if (response.status === 201) {
    //     // Successfully signed up
    //     router.push("/login"); // Redirect to login page
    //   } else {
    //     throw new Error("Signup failed"); // For non-201 statuses
    //   }
    // } catch (err) {
    //   setError("Signup failed. Please check your inputs and try again."); // General error message
    // } finally {
    //   setIsLoading(false); // Stop loading
    // }
  };

  return (
    // <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    //   <section className="register py-12 w-full max-w-md">
    //     <div className="container mx-auto px-4">
    //       <div className="text-center mb-10">
    //         <p className="text-lg mt-2">Register in advance and enjoy the event benefits</p>
    //       </div>

    //       <Tabs>
    //         <TabList className="flex space-x-4 justify-center">
    //           <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
    //             <h6 className="text-lg font-medium">Email</h6>
    //           </Tab>
    //           <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:outline-none focus:bg-blue-500">
    //             <h6 className="text-lg font-medium">Mobile</h6>
    //           </Tab>
    //         </TabList>

    //         {/* Email Signup */}
    //         <TabPanel className="border p-4 bg-white shadow-lg rounded-md mt-4">
    //           <form onSubmit={handleEmailSignup} className="space-y-4">
    //             <div>
    //               <label htmlFor="email" className="block font-medium">
    //                 Email/ID
    //               </label>
    //               <input
    //                 type="email"
    //                 id="email"
    //                 className="block w/full p-2 border rounded-md"
    //                 placeholder="Please enter your email"
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 required // Required field
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="password" className="block font-medium">
    //                 Password <span className="text-sm">(8 or more characters, including numbers and special characters)</span>
    //               </label>
    //               <input
    //                 type="password"
    //                 id="password"
    //                 className="block w/full p-2 border rounded-md"
    //                 placeholder="Please enter a password"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 required // Required field
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="confirm-password" className="block font-medium">
    //                 Confirm Password
    //               </label>
    //               <input
    //                 type="password"
    //                 id="confirm-password"
    //                 className="block w/full p-2 border rounded-md"
    //                 placeholder="Please re-enter your password"
    //                 value={confirmPassword}
    //                 onChange={(e) => setConfirmPassword(e.target.value)}
    //                 required // Required field
    //               />
    //             </div>

    //             <button
    //               type="submit"
    //               className="w/full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    //             >
    //               {isLoading ? 'Signing up...' : 'Signup'}
    //             </button>

    //             {error && (
    //               <div className="text-red-500 text-center mt-4">
    //                 {error}
    //               </div>
    //             )}
    //                <div className="flex justify-between items-center mt-4">
    //                                 <p>Already have an account?</p>
    //                                 <Link href="/login" className="text-blue-600">Login</Link>
    //                             </div>

    //           </form>
    //         </TabPanel>

    //         {/* Mobile Signup */}
    //         <TabPanel className="border p-4 bg-white shadow-lg rounded-md mt-4">
    //           <form onSubmit={handleMobileSignup} className="space-y-4">
    //             <div>
    //               <label htmlFor="mobile" className="block font-medium">
    //                 Mobile Phone
    //               </label>
    //               <div className="flex items-center space-x-4">
    //                 <select
    //                   className="p-2 border rounded-md"
    //                   value={code}
    //                   onChange={(e) => setCode(e.target.value)}
    //                 >
    //                   <option>+1</option>
    //                   <option>+84</option>
    //                   <option>+82</option>
    //                   <option>+32</option>
    //                 </select>

    //                 <input
    //                   type="text"
    //                   id="mobile"
    //                   className="flex-1 p-2 border rounded-md"
    //                   placeholder="Your phone number"
    //                   value={mobile}
    //                   onChange={(e) => setMobile(e.target.value)}
    //                   required // Required field
    //                 />
    //               </div>
    //             </div>
    //             <div>
    //               <label htmlFor="mobile-password" className="block font-medium">
    //                 Password <span className="text-sm">(8 or more characters, including numbers and special characters)</span>
    //               </label>
    //               <input
    //                 type="password"
    //                 id="mobile-password"
    //                 className="block w/full p-2 border rounded-md"
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 required // Required field
    //               />
    //             </div>
    //             <div>
    //               <label htmlFor="mobile-confirm-password" className="block font-medium">
    //                 Confirm Password
    //               </label>
    //               <input
    //                 type="password"
    //                 id="mobile-confirm-password"
    //                 className="block w/full p-2 border rounded-md"
    //                 placeholder="Please re-enter your password"
    //                 value={confirmPassword}
    //                 onChange={(e) => setConfirmPassword(e.target.value)}
    //                 required // Required field
    //               />
    //             </div>

    //             <button
    //               type="submit"
    //               className="w/full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    //             >
    //               {isLoading ? 'Signing up...' : 'Signup'}
    //             </button>

    //             {error && (
    //               <div className="text-red-500 text-center mt-4">
    //                 {error}
    //               </div>
    //             )}
    //                <div className="flex justify-between items-center mt-4">
    //                                 <p>Already have an account?</p>
    //                                 <Link href="/login" className="text-blue-600">Login</Link>
    //                             </div>

    //           </form>
    //         </TabPanel>
    //       </Tabs>

    //       <div className="my-8 text-center">
    //         <span>OR</span>
    //       </div>
    //       {/* Social login icons */}
    //       <div className="flex justify-center space-x-4">
    //         <a href="#" className="text-blue-600 hover:text-blue-800">
    //           <FaFacebook size={24} />
    //         </a>
    //         <a href="#" className="text-blue-400 hover:text-blue-600">
    //           <FaTwitter size={24} />
    //         </a>
    //         <a href="#" className="text-pink-500 hover:text-pink-700">
    //           <FaInstagram size={24} />
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    // </div>

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <section className="login p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg">
              Welcome Sign Up now to start trading.
            </p>
          </div>

          <form onSubmit={handleEmailSignup}>
            {/* Email login */}
            <Tabs>
              <TabList className="flex justify-center space-x-4">
                <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:bg-blue-500">
                  Email
                </Tab>
                <Tab className="py-2 px-4 bg-gray-200 rounded-md cursor-pointer focus:bg-blue-500">
                  Mobile
                </Tab>
              </TabList>

              {/* Email login panel */}
              <TabPanel className="mt-4">
                <div className="content-inner">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Email/ID
                    </label>
                    <input
                      type="email"
                      className="form-control w-full border border-gray-300 p-2 rounded-md"
                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      required // Required field
                      placeholder="Please enter your email."
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control w-full border border-gray-300 p-2 rounded-md"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state
                      placeholder="Please enter your password."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="mobile-confirm-password"
                      className="block font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="mobile-confirm-password"
                      className="form-control w-full border border-gray-300 p-2 rounded-md"
                      placeholder="Please re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required // Required field
                    />
                  </div>
                 

                  <button
                    type="submit"
                    className="w-full bg-blue-500 mt-5 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Sign Up
                  </button>
                  <div className="mt-4 text-center">
                    <p>Already have an account?</p>
                    <Link
                      href="/login"
                      className="text-blue-500 hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                  {error && (
                    <div className="text-red-500 text-center mt-4">
                      {error} {/* Display error message */}
                    </div>
                  )}
                </div>
              </TabPanel>

              {/* Mobile login panel */}
              <TabPanel className="mt-4">
                <div className="content-inner">
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Mobile Phone
                    </label>
                    <div className="flex space-x-2 items-center">
                      <select
                        className="w-20 border border-gray-300 p-2 rounded-md"
                        value={code}
                        onChange={(e) => setCode(e.target.value)} // Update country code
                      >
                        <option>+1</option>
                        <option>+84</option>
                        <option>+82</option>
                        <option>+32</option>
                      </select>

                      <input
                        type="text"
                        className="form-control w-full border border-gray-300 p-2 rounded-md"
                        placeholder="Your phone number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)} // Update state
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control w-full border border-gray-300 p-2 rounded-md"
                      placeholder="Please enter your password."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mobile-confirm-password"
                      className="block font-medium"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="mobile-confirm-password"
                      className="form-control w-full border border-gray-300 p-2 rounded-md"
                      placeholder="Please re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required // Required field
                    />
                  </div>
                  

                  <button
                    type="submit"
                    className="w-full bg-blue-500 mt-5 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                Sign Up
                  </button>
                  <div className="mt-4 text-center">
                    <p>Already have an Account?</p>
                    <Link
                      href="/login"
                      className="text-blue-500 hover:underline"
                    >
                      Login
                    </Link>
                  </div>
                  {error && (
                    <div className="text-red-500 text-center mt-4">{error}</div>
                  )}
                </div>
              </TabPanel>
            </Tabs>

            {/* Social login options */}
            <div className="my-8 border-b border-gray-300 text-center">
              <span>OR</span>
            </div>

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
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
