import React, { Component } from "react";
import gotService from "../../services/gotService";
import "./itemList.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  gotService = new gotService();

  state = {
    itemList: null,
  
  };
  componentDidMount() {
    const {getData} = this.props;

    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      console.log(item);
      return (
        <li
          key={i}
          className="list-group-item"
          data-key={item.url}
          onClick={() => this.props.onCharSelected(item.url) }
        >
          {item.name}
        </li>
      );
    });
  }
  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);

    return (
      <ul className="item-list list-group">
       {items}
      </ul>
    );
  }
}
