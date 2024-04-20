"use client"
import { useEffect } from 'react';
import Router from 'next/router';

import PersonalWallet from "@/components/PersonalWallet";

export default function Home() {
  useEffect(() => {
    // Check if user is not logged in, then redirect to the login page
    // You can implement this logic based on your authentication system
    const isLoggedIn = true; // Replace this with your actual authentication logic
    if (!isLoggedIn) {
      Router.push('/login');
    }
  }, []);
  return <PersonalWallet />;
}
