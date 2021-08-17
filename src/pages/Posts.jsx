// core
import React, {useState, useEffect, useRef} from 'react';
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
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts( [...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });
    // effects
    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
       setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit]);

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
            <MySelect
                value={limit}
                onChangeHandler={value => setLimit(value)}
                defaultValue="Кол-во элементов на странице"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Все посты'}
                ]}
            />
            {
                postError && <h2 style={{ color: 'red', textAlign: 'center'}}>Post error ${postError}</h2>
            }
            {
                isPostsLoading && <MyLoader />
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            <div ref={lastElement} style={{height: '20px', background: 'red'}} />
            {/*<Pagination page={page} changePage={changePage} totalPages={totalPages}/>*/}

        </div>
    );
}

export default Posts;
