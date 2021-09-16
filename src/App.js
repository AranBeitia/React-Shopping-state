import React, { Component } from "react";
import * as api from "./api"
import { readLocalStorage, writeLocalStorage } from "./utils/localStorage"
import Home from "./pages/Home";
import products from "./utils/demo-data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cardItems: [],
      isLoadingSuccess: false,
      isLoading: false,
      isLoadingError: false,
      loadError: null
    }

    this.handleRemove = this.handleRemove.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState(prevState =>( {
      ...prevState,
      isLoading: true
    }))

    const products = readLocalStorage("products")
    if(!products || products.length <= 0) {
      api.getProducts().then(data => {
        this.setState(prevState => ({
          ...prevState,
          products: data,
          isLoading: false,
          isLoadingSuccess: true,
          loadError: null
        }))
      }).catch(() => {
        this.setState(prevState => ({
          ...prevState,
          isLoading: false,
          isLoadingError: true,
          loadError: null
        }))
      })
    }
    console.log('mounted');
  }

  componentDidUpdate() {
    writeLocalStorage("products", JSON.stringify(this.state.products))
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
  // handleAddToCart(productId) {}

  handleChange() {
    return console.log('hi');
  }

  handleRemove() {
    return console.log('ho');
  }

  // handleDownVote(productId) {}

  // handleUpVote(productId) {}

  // handleSetFavorite(productId) {}

  render() {
    const { products, cardItems, isLoading, isLoadingSuccess, loadError } = this.state;

    return (
        <Home
          products={products}
          cardItems={cardItems}
          isLoading={isLoading}
          isLoadingSuccess={isLoadingSuccess}
          loadError={loadError}
          handleRemove={() => {}}
          handleChange={() => {}}
        />
      // <Home
      //   cartItems={cartItems}
      //   products={products}
      //   isLoading={isLoading}
      //   hasError={hasError}
      //   loadingError={loadingError}
      //   handleDownVote={() => {}}
      //   handleUpVote={() => {}}
      //   handleSetFavorite={() => {}}
      //   handleAddToCart={() => {}}
      //   handleRemove={() => {}}
      //   handleChange={() => {}}
      // />
    );
  }
}

export default App;
