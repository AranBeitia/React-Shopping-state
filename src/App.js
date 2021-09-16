import React, { Component } from "react";
import * as api from "./api"
import products from "./utils/demo-data";
// import Home from "./pages/Home";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoadingSuccess: false,
      isLoading: false,
      isLoadingError: false,
      loadError: null
    }
  }

  componentDidMount() {
    this.setState(prevState =>( {
      ...prevState,
      isLoading: true
    }))

    api.getProducts().then(data => {
      this.setState(prevState => ({
        ...prevState,
        products: data,
        isLoading: false,
        isLoadingSuccess: true,
        loadError: null
      }))
    })

    console.log('mounted');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
  // handleAddToCart(productId) {}

  // handleChange(event, productId) {}

  // handleRemove(productId) {}

  // handleDownVote(productId) {}

  // handleUpVote(productId) {}

  // handleSetFavorite(productId) {}

  render() {
    const { products, isLoading, isLoadingSuccess, loadError } = this.state;

    return (
      <>
        { isLoading && <h4>Loading products</h4> }
        { !isLoading && isLoadingSuccess && products.map(product => <p>{product.title}</p>) }
      </>
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
