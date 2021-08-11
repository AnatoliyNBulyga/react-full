import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, remove}) => {

    return posts.length
    ? (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map( (post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                >
                    <PostItem remove={remove} number={index + 1} post={post} />
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
    : <h2 style={{textAlign: 'center'}}>Have no posts</h2>
};

export default PostList;