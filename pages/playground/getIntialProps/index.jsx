import { useState, useEffect } from 'react';

const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/';

const DemoGetIntialProps = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(BASE_URL + '/api/post/getListPagination.php?pagesize=5&currPage=1')
      .then(async (response) => {
        const data = await response.json()

        console.log('data.posts = ', data.posts);

        setPosts(data.posts);
      })
  }, []);

  return (
    <div className="container">
      <h1>Demo GetIntialProps</h1>
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

export default DemoGetIntialProps;