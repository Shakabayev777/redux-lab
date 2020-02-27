import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import Main from '../src/Main';
import store from '../src/redux/store';
import './App.css';


const postsData = [
  {
    id: 1,
    title: 'My first post',
    text: 'New Post in the blog',
    liked: false,
  },
  {
    id: 2,
    title: 'The second post',
    text: 'Awesome text!',
    liked: false,
  },
  {
    id: 3,
    title: 'Another post',
    text: 'Hello World',
    liked: false,
  }
];

function App() {

  const [posts, setPosts] = useState(postsData);
  const [likedCount, setLikedCount] = useState(0);

  // const[user, setUser] = useState({
  //   //   firstName: 'Assan',
  //   //   lastName: 'Shakabayev',
  //   // });
  useEffect(() => {
    setLikedCount(posts.filter(p => p.liked).length);
  }, [posts]);

  const onLikedClicked = (postId) => {
    const newPosts = posts.map(post => {
      if (postId === post.id) {
        post.liked = !post.liked;
      }
      return post;
    });
    setPosts(newPosts);
  };

  return (
      <Provider store = {store}>
        <Main />
      </Provider>
  );
}

export default App;
