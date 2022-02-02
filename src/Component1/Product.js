import React, { Component } from "react";
import styled from "styled-components";
export default class Product extends Component {
  //rcc : class component skeleton
//rafc : 
  constructor(props) {
    super(props);
    this.addLikes = this.addLikes.bind(this);
  }
  state = {
    product: this.props.prod,
    likes: 0,
    updated: false,
  };
  addLikes() {
    this.setState((previous) => ({
      likes: previous.likes + 1,
      updated: true,
    }));
    console.log("stated updated");
  }

  componentDidMount = () => {
    console.log("i have mounted");
  };
  componentDidUpdate = () => {
    console.log("i got updated");
  };
  componentWillUnmount = () => {
    console.log("i got destroyed");
  };

  render() {
    return (
      
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.state.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>{this.state.product.name}</ProductInfoWrapper>
        <ProductInfoWrapper>{this.state.product.price}</ProductInfoWrapper>
          {/* <h1>{this.props.name}</h1> */}

        <p>likes : {this.state.likes}</p>
        <button onClick={this.addLikes}>Like</button>
        <ProductInfoWrapper>{this.state.product.likes}</ProductInfoWrapper>
      </ProductFrame>
    );
  }
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;
