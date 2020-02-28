import React from 'react';
import Post from './Post';

import './PostsList.css';
import {connect} from "react-redux";
// import {setUser} from "src/redux/actions/user.action";
// import {getUser} from "src/redux/affects/user.effects";
import { getPosts } from '../redux/affects/post.effects';
import { setPosts } from '../redux/actions/post.action';

class PostsList extends React.Component {
    // constructor(props) {
        // super(props);
        // this.props = {
        //     postData: "",
        // }
    // }
    render() {
        // if(this.props.postData!=null)
        //     console.log(this.props.postData[Math.floor(Math.random()* this.props.postData.length) | 0].title);
        return (
            // <div className="PostsList__list">
            //     {
            //         this.props.postData
            //         .map(post => <Post
            //         key={post.id}
            //         item={post}
            //         onLikedClicked={this.props.onLikedClicked}
            //         />)
            //     }
            // </div>
            <div className="PostsList__list">
                {  this.props.items!=null &&
                    this.props.items
                    .map(post => <Post
                    key={post.id}
                    item={post}
                    onLikedClicked={this.props.onLikedClicked}
                    />)
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.user.loading,
    postData: state.post.postData,
});
export default connect(mapStateToProps, { setPosts, getPosts })(PostsList);
