'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <button onClick={() => router.push('/')}>Home</button>
      <button onClick={() => router.push('/about')}>About</button>
      <button onClick={() => router.push('/contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;