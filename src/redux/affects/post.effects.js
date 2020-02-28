import {setLoading, setPosts} from '../actions/post.action';
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
                posts.map(post => post.liked='false');
                var rand = Math.floor(Math.random()* posts.length);
                if(rand-3<0 || rand+3>100){
                    rand=Math.floor(Math.random()* posts.length);
                }
                dispatch(setPosts(posts.slice(rand,rand+3)));
            })
            .finally (() => {
                dispatch(setLoading(false));
            })
    }

}
