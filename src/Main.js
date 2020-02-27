import React, { useState, useEffect, useCallback } from 'react';
import Header from "../src/layout/Header";
import UserAvatar from "../src/user/UserAvatar";
import Sider from "../src/layout/Sider";
import Content from "../src/layout/Content";
import LikesCounter from '../src/LikesCounter';
import PostsList from "../src/posts/PostsList";
import './App.css';
import { connect } from 'react-redux';
import { setUser } from './redux/actions/user.action';
import { getUser } from './redux/affects/user.effects';

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

const Main = ( {userData , getUser, isLoading } ) => {
    console.log(userData);
    const [posts, setPosts] = useState(postsData);
    const [likedCount, setLikedCount] = useState(0);

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
    const onNameChangeClick = useCallback(() => {
       // setUser({
       //     firstName: 'Bob',
       //     lastName: 'Sponge',
       // }) ;
       getUser();
    });
    return(
        <div className="App">
            <Header>
                <UserAvatar/>
            </Header>
            <div className="App__main">
                <Sider>
                </Sider>
                <button type="button" className="btn btn-primary" onClick={() => getUser()} >Change name</button>
                <Content>
                    <LikesCounter count={likedCount} />
                    <PostsList items={posts} onLikedClicked={onLikedClicked} />
                </Content>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    userData: state.user.userData,
    isLoading: state.user.loading,
});
export default connect(mapStateToProps, { setUser, getUser })(Main);
