import React from 'react';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.filter(item => {
        return typeof item === 'object' && isEmpty(item)
    }).map(item => {
        const {id, ...ItemProps} = item;
        //e <PostListItem label= {item.label} important= {item.important}/>
        return (
            <li key={id} className="list-group-item">
             <PostListItem  {...ItemProps}/>
            </li>
        )
    });
    function isEmpty(obj) {
        for(let key in obj)
        {
            console.log(obj);
            console.log(key);
            return true;
        }
        return false;
    }
    return (
        <ListGroup className="app-list list-group">
           {elements}
        </ListGroup>
    )
}

export default PostList;