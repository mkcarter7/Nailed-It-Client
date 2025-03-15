'use client';

import { useAuth } from '@/utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        height: '100vh', // Full height of the viewport
        width: '100vw', // Full width of the viewport
        backgroundImage: `url('/images/signin.png')`,
        backgroundSize: 'cover', // Cover the whole container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent tiling
      }}
    >
      <h1 style={{ color: '#5C350C' }}>Hello {user.displayName}!</h1>
    </div>
  );
}

export default Home;
