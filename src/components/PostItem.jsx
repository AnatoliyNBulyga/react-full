import React from 'react';

const PostItem = ({number, remove, post}) => {

    return (
        <div className="post">
            <div className="post__counter">
                <strong>{number}. {post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={() => remove(post)}>Удилить</button>
            </div>
        </div>
    );
};

export default PostItem;