'use client';

import { signOut } from 'next-auth/react';

const SignoutButton = () => {
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className="w-full flex items-center justify-center px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 gap-x-2"
    >
      <span>Sign Out</span>
    </button>
  );
};


export default SignoutButton;
