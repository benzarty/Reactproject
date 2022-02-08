import styled from "styled-components";


import React from 'react';

export const Product = (props) => {

 


    return (
      
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={props.prod.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>{props.prod.name}</ProductInfoWrapper>
        <ProductInfoWrapper>{props.prod.price}</ProductInfoWrapper>

        <p>likes : {props.prod.likes}</p>
         {/* <button onClick={this.addLikes}>Like</button>  */}
        <ProductInfoWrapper>{props.prod.likes}</ProductInfoWrapper>
      </ProductFrame>
    );
  
    
};

export default Product;

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
