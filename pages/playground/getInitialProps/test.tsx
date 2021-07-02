import Link from 'next/link';

export default function Test() {
  return (
    <div className="container">
      <h1>getInitialProps</h1>
      <Link href="/playground/getInitialProps">
        <a>Di chuyển qua trang test</a>
      </Link>
    </div>
  );
}