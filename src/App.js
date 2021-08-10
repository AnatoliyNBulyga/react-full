import React, {useState, useMemo} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'ааа', body: 'бб'},
        {id: 2, title: 'вв 3', body: 'яяя'},
        {id: 3, title: 'гг 2', body: 'ааа'}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        console.log('sortedPosts had worked!')
        return filter.sort
            ? [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]))
            : posts
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts])

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
        <hr style={{margin: '15px 0'}} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {
            sortedAndSearchedPosts.length
            ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            : <h2 style={{textAlign: 'center'}}>Have no posts</h2>
        }

    </div>
  );
}

export default App;
