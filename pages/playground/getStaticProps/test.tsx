import Link from 'next/link';

export default function Test() {
  return (
    <div className="container">
      <h1>getStaticProps</h1>
      <Link href="/playground/getStaticProps">
        <a>Di chuyển qua trang test</a>
      </Link>
    </div>
  );
}