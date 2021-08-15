// core
import React, {useState, useEffect} from 'react';
// styles
import '../styles/App.css';
// components
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";
import PostService from "../API/PostService";
import {getPageCount, getPagesArray} from "../components/utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    // effects
    useEffect(() => {
        fetchPosts(limit, page);
    }, []);
    // handlers
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }
    // get post from child component
    const removePost = (post) => {
        setPosts(posts.filter( p => p.id !== post.id ));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{margin: '15px 0'}} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {
                postError && <h2 style={{ color: 'red', textAlign: 'center'}}>Post error ${postError}</h2>
            }
            {
                isPostsLoading
                    ? <MyLoader />
                    : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

        </div>
    );
}

export default Posts;
