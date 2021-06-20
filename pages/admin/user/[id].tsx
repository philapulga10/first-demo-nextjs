import { useRouter } from 'next/router';
import Link from 'next/link';

import Head from 'next/head';

export default function AdminUser() {
  const router = useRouter();

  function handleOnClick() {
    router.push('/login');
  }

  return (
    <>
      <h1>Admin - User Page {router.query.id}</h1>
      <Link href="/login">
        <button className="active">Go to Home Page by a tag</button>
      </Link>
      <button onClick={handleOnClick}>Go to Home Page</button>
    </>
  )
}