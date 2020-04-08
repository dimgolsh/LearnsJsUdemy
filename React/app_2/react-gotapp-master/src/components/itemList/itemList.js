import React, { Component } from "react";
import "./itemList.css";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import ItemDetails from "../itemDetails";
import PropTypes from "prop-types";
import GotService from '../../services/gotService';
 class ItemList extends Component {
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
    const {data} = this.props;
    const items = this.renderItems(data);

    return <ul className="item-list list-group">{items}</ul>;
  }
}

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      error: false,
    };

    static defaultProps = {
      onItemSelected: () => {},
    };

    static propTypes = {
      onItemSelected: PropTypes.func,
      // getData: PropTypes.arrayOf(PropTypes.object)
    };

    componentDidCatch() {
      this.setState({ error: true });
    }
    componentDidMount() {
    

      getData().then((data) => {
        this.setState({
          data,
        });
      });
    }
    render (){

      const {data} = this.state;

      if (this.state.error) {
        return <ErrorMessage />;
      }
  
  
      if (!data) {
        return <Spinner />;
      }
      return <View {...this.props} data={data} />
    }
  };
};

const {getAllCharacters} = new GotService();

export default withData(ItemList, getAllCharacters);
