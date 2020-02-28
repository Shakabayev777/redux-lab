import React from 'react';
import Post from './Post';
import './PostsList.css';
import {connect} from "react-redux";
import { getPosts } from '../redux/affects/post.effects';
import { setPosts } from '../redux/actions/post.action';

class PostsList extends React.Component {
    render() {
        return (
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
