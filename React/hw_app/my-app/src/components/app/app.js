import React, { Component } from "react";

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

const StyledAppBlock = styled(AppBlock)`
background-color:grey
`;


export default class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
      data : [

        {label: 'Going to lear React', important:true, id:'efefef'},
        {label: 'Good', important:false, id:'effef'},
        {label: 'I need break', important:false, id:'efegef'},
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(id){
    this.setState(({data})=>{
      const index = data.findIndex(elem => elem.id === id );
      data.splice(index, 1);
      return {
        data: data
      }
    });
  }
  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data}
          onDelete ={this.deleteItem}      
        />
        <PostAddForm />
      </AppBlock>
    );
  }
  
};

