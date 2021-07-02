import Link from 'next/link';

export default function Test() {
  return (
    <div className="container">
      <h1>getServerSideProps</h1>
      <Link href="/playground/getServerSideProps">
        <a>Di chuyển qua trang test</a>
      </Link>
    </div>
  );
}