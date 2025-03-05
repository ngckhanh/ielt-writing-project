'use client';

import { signIn } from 'next-auth/react';

const GoogleSignInButton = () => {
  const handleSignIn = async () => {
    try {
      const response = await signIn('google', {
        callbackUrl: '/', 
      });
      if (!response?.error) {
        console.log('Sign-in successful!');
      } else {
        console.error('Sign-in failed:', response.error);
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignIn}
      aria-label="Sign in with Google"
      className="w-full flex items-center justify-center px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 gap-x-2"
    >
      <GoogleIcon />
      <span>Continue with Google</span>
    </button>
  );
};

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 48 48"
    aria-hidden="true"
    focusable="false"
    className="w-8 h-8"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12 c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20 c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946 l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002 l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
);

export default GoogleSignInButton;
