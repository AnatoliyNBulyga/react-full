import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    const options = [{value: 'title', name: 'By title'}, {value: 'body', name: 'By description'}];
    
    return (
        <div>
            <MyInput value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} placeholder="Поиск..."/>
            <MySelect value={filter.sort} onChangeHandler={selectedSort => setFilter({...filter, sort: selectedSort})} defaultValue='Sort By' options={options} />
        </div>
    );
};

export default PostFilter;