import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useHistory} from 'react-router-dom';

const PostItem = ({remove, post}) => {
    const router = useHistory();

    return (
        <div className="post">
            <div className="post__counter">
                <strong>{post.id}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => remove(post)}>Удилить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;