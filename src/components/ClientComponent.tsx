'use client';

import { useSession } from 'next-auth/react';
import GoogleSignInButton from './GoogleSignInButton';

const ClientComponent = () => {
    const {data, status} = useSession()

  return (
    <div>
        {status === "loading" && <p>Loading...</p>}
        {status === "unauthenticated" && <GoogleSignInButton/>}
        {status === "authenticated" && (
            <>
            <h1 className="text-xl font-semibold">Welcome {data.user?.name}</h1>
    
            <h1 className="text-xl font-semibold">Email: {data.user?.email}</h1>
            </>
        )}
    
      
    </div>
  );
};

export default ClientComponent;
