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
import { getPosts } from './redux/affects/post.effects';
import { setPosts } from './redux/actions/post.action';

const Main = ( {userData , getUser, isLoading, postData, getPosts } ) => {
    const [posts, setPosts] = useState(postData);
    const [likedCount, setLikedCount] = useState(0);

    useEffect(() => {
        posts!=null &&
        setLikedCount(posts.filter(p => p.liked).length);
    }, [posts]);
    const onLikedClicked = (postId) => {
        const newPosts = postData.map(post => {
            if (postId === post.id) {
                post.liked = !post.liked;
            }
            return post;
        });
        setPosts(newPosts);
    };
    return(
        <div className="App">
            <Header>
                <UserAvatar/>
            </Header>
            <div className="App__main">
                <Sider>
                </Sider>
                <Content>
                    <button type="button" className="btn btn-primary" onClick={() => getUser()} >Change name</button>
                    <button type="button" className="btn btn-primary" onClick={() => getPosts()} >Change post</button>
                    <LikesCounter count={likedCount} />
                    <PostsList items={postData} onLikedClicked={onLikedClicked} />
                </Content>
            </div>
        </div>
    )
};
const mapStateToProps = state => ({
    userData: state.user.userData,
    isLoading: state.user.loading,
    postData: state.post.postData,
});
export default connect(mapStateToProps, { setUser, getUser, setPosts, getPosts })(Main);
