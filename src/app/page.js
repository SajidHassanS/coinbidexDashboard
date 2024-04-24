"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './login/page';
import Page from './personalwallet/page';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // To track client-side mount
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // This effect runs only on the client side
  }, []);

  useEffect(() => {
    if (isMounted) {
      const token = localStorage.getItem("token"); // Access only if mounted

      if (!token) {
        console.log("User not logged in - Redirecting to login.");
        router.push('/login'); // Redirect to login page
      } else {
        console.log("User logged in - Redirecting to personal wallet.");
        router.push('/personalwallet'); // Redirect to personal wallet
      }
    }
  }, [isMounted, router]); // Dependency on isMounted and router ensures reactivity

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  // Optionally, return something if needed
  return (
    <>
      {isLoggedIn ? (
        <Page /> // If logged in, show the wallet
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} /> // If not logged in, render login
      )}
    </>
  ); // You can change this depending on your component requirements
}
