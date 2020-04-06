import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from "../charDetails";
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';



export default class CharacterPage extends Component {

    gotService = new GotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        console.log(id);
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch(){
        console.log('error');
        this.setState({
            error: true
        })
    }

    render(){

        if(this.state.error){
            return <ErrorMessage/>;
        }

        const itemList = (
            <ItemList
            onCharSelected = {this.onCharSelected}
            getData = {this.gotService.getAllCharacters}
            renderItem = {({name,gender}) => `${name} (${gender})`}
            />
        )
        const charDetails = (
            <CharDetails charId = {this.state.selectedChar} />
        )
        return (

          <RowBlock left={itemList} right={charDetails}/>
        )
    }
}
