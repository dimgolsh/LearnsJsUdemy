import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';
import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
`;


const data = [

  {label: 'Going to lear React', important:true, id:'efefef'},
  {label: 'Good', important:false, id:'effef'},
  {label: 'I need break', important:false, id:'efegef'},
];
const App = () => {
  return (
    <div className={style.app}>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
