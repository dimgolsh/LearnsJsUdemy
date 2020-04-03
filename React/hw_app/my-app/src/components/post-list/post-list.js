import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label='Going to learn react'/>
            <PostListItem label='Thst to learn react'/>
            <PostListItem label='i need a break'/>
        </ul>
    )
}

export default PostList;