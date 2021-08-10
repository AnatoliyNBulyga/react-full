import React from 'react';
import PostItem from "./PostItem";

const PostList = ({title, posts, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map( (post, index) => <PostItem key={post.id} remove={remove} number={index + 1} post={post} /> )}
        </div>
    );
};

export default PostList;