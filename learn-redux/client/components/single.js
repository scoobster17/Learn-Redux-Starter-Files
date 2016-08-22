import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
    render() {

        const { postId } = this.props.params;

        // index of post
        const i = this.props.posts.findIndex((post) => post.code === postId);

        // get us the post
        const post = this.props.posts[i];

        const postComments = this.props.comments[postId] || [];

        return(
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} />
            </div>
        )
    }
})

export default Single;