"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from './login/page';
import PersonalWallet from '@/components/PersonalWallet';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  const router = useRouter();
const token = localStorage.getItem("token")
  useEffect(() => {
    const checkLoginStatus = async () => {
      const isUserLoggedIn = false; // Example - Replace with actual login check logic
      setIsLoggedIn(isUserLoggedIn);

      if (!token) {
        console.log("User not logged in - Redirecting to login.");
        router.push('/login'); // Redirect to login page
      } else {
        console.log("User logged in - Redirecting to personal wallet.");
        router.push('/personalwallet'); // Redirect to personal wallet
      }
    };

    checkLoginStatus(); // Check login status on mount
  }, [router]); // Dependency on router ensures reactivity

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
     // Update state to indicate user is logged in
  };

  return null;
}
