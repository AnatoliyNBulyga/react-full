import React, {useState, useRef} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript1', body: 'JavaScript - язык программирования'},
        {id: 2, title: 'JavaScript2', body: 'JavaScript - язык программирования'},
        {id: 3, title: 'JavaScript3', body: 'JavaScript - язык программирования'}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    // get post from child component
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id ));
    }

  return (
    <div className="App">
        <PostForm create={createPost} />
        {
            posts.length
            ? <PostList remove={removePost} posts={posts} title="Посты про JS" />
            : <div>Have no posts</div>
        }

    </div>
  );
}

export default App;
