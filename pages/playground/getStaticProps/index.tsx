import React from "react";
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api"

type PostType = {
  PID: string;
  post_content: string;
}
type PropsType = {
  posts: PostType[]
}

type PagePropsType = React.FC<InferGetStaticPropsType<typeof getStaticProps>>

const DemoGetStaticProps: PagePropsType = ({ posts }) => {
  return (
    <div className="container">
      <h1>Demo getStaticProps</h1>
      <Link href="/playground/getStaticProps/test">
        <a>Di chuyen qua trang Test</a>
      </Link>
      <ul>
        {
          posts.map((post) => {
            return <li key={post.PID}>{post.post_content}</li>
          })
        }
      </ul>
    </div>
  )
}

DemoGetStaticProps.defaultProps = {
  posts: []
}

export const getStaticProps: GetStaticProps<PropsType> = async (context) => {
  const response = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1');
  const data = await response.json();

  // tại sao chỗ này thêm PostsTypep[] k được???
  const props = {
    posts: data.posts
  }

  return {
    props
  }
}

export default DemoGetStaticProps;