import React from 'react';
import Photo from './photo';
import Comments from './comments';

const Single = React.createClass({
    render() {

        // index of post
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);

        // get us the post
        const post = this.props.posts[i];

        return(
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments />
            </div>
        )
    }
})

export default Single;