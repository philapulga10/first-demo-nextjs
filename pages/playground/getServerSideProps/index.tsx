import React from "react";
import Link from 'next/link';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/';

type PostType = {
  PID: string,
  post_content: string
};

type PropsType = {
  posts: PostType[]
};

// next/link
// 1. getInitialProps tiếp gọi sang API của HerokuApp
// 2. getServerSideProps => gọi API vào server NextJS (bước trung gian do NextJS tự động làm)
// => server NextJS => gọi sang API của HerokuApp => che dấu được API phía HerokuApp

// với getServerSideProps không dùng NextPage vì getServerSideProps không phải là static function của NextPage, đơn giản nó chỉ export getServerSideProps
// InferGetServerSidePropsType kiểu dữ liệu được lấy từ getServerSideProps => gán cho page
const DemoGetServerSideProps: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ posts }) => {
  return (
    <div className="container">
      <h1>Demo getServerSideProps</h1>
      <Link href="/playground/getServerSideProps/test">
        <a>Go to Test Page</a>
      </Link>
      <ul>
        {
          posts.map((post) => {
            return <li key={post.PID}>{post.post_content}</li>
          })
        }
      </ul>
    </div>
  );
}

DemoGetServerSideProps.defaultProps = {
  posts: []
};

// PropsType ở đây muốn khai báo nguyên cho props lớn
// làm sao để trình biên dịch nhận diện được kiểu dữ liệu là được
export const getServerSideProps: GetServerSideProps<PropsType> = async (context) => {
  const response = await fetch(BASE_URL + '/api/post/getListPagination.php?pagesize=5&currPage=1');
  const data = await response.json();

  const posts: PostType[] = data.posts;

  return {
    props: {
      posts
    }
  };
}

export default DemoGetServerSideProps;