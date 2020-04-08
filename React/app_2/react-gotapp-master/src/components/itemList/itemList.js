import React, { Component } from "react";
import "./itemList.css";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

export default class ItemList extends Component {
 

  state = {
    itemList: null,
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }
  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      console.log(item);
      const { id } = item;
      const { label } = this.props.renderItem(item);
      console.log(this.props.renderItem(item));
      return (
        <li
          key={i}
          className="list-group-item"
          data-key={item.url}
          onClick={() => this.props.onItemSelected(item.url)}
        >
          {this.props.renderItem(item)}
        </li>
      );
    });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }
    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
