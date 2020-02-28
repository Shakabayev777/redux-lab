import {setLoading, setPosts} from '../actions/post.action';
// import Post from "src/posts/Post";
import React from "react";

export function getPosts() {
    return function (dispatch, getState) {
        dispatch(setLoading(true));
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                if(!posts || !posts.length){
                    dispatch(setPosts(null));
                }
                // console.log(posts);
                const {title, body} = posts[
                    Math.floor(Math.random()* posts.length)
                    ];

                var liked;
                posts
                    .map(post => post.liked='false');
                // var myPosts=[];
                // myPosts=posts[1];
                // myPosts+=posts[3];
                // myPosts+=posts[5];
                var rand = Math.floor(Math.random()* posts.length);
                dispatch(setPosts(posts.slice(rand,rand+3)));
            })
            .finally (() => {
                dispatch(setLoading(false));
            })
    }

}
