// import { useState, useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/';

type PostType = {
  PID: string,
  post_content: string
};

type PropsType = {
  posts: PostType[]
};

// 1. F5: request lại lên phía server -> nhận lại HTML hoàn toàn mới

// 2. di chuyển qua lại giữa các trang trong App (thông qua Router Link của NextJS)
//  - vừa là Server side render
//  - vừa là Client side render
//  - trong lần load trang đầu tiên
//    => user nhận được HTML hoàn chỉnh khi request lên server
//    => trong mã nguồn chứa những file JS lên quan tới React
//    => sau đó app sẽ trở thành Client Side Render

// getInitialProps sử dụng NextPage ngầm bên dưới NextPage đã được khai báo thêm getInitialProps
const DemoGetIntialProps: NextPage<PropsType> = ({ posts }) => {
  // ================ cách này là client side nên k dùng nữa ================
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(BASE_URL + '/api/post/getListPagination.php?pagesize=5&currPage=1')
  //     .then(async (response) => {
  //       const data = await response.json()

  //       console.log('data.posts = ', data.posts);

  //       setPosts(data.posts);
  //     })
  //     .then((response) => {
  //       console.log('response: ', response);

  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log('result: ', result);
  //     });
  // }, []);
  // =========================================================================

  return (
    <div className="container">
      <h1>Demo getIntialProps</h1>
      <Link href="/playground/getInitialProps/test">
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

DemoGetIntialProps.getInitialProps = async (context: NextPageContext) => {
  const response = await fetch(BASE_URL + '/api/post/getListPagination.php?pagesize=5&currPage=1');
  const data = await response.json();

  return {
    posts: data.posts
  }
}

export default DemoGetIntialProps;