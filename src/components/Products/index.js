 import React from 'react';
 import {
     ProductsContainer,
     ProductWrapper,
     ProductsHeading,
     ProductTitle,
     ProductPrice,
     ProductCard,
     ProductImg,
     ProductInfo,
     ProductDesk,
     ProductButton
 } from './ProductsElement';
 
 function Products({heading,data}) {
     return (
        <ProductsContainer>
            <ProductsHeading> {heading} </ProductsHeading>
            <ProductWrapper>
                {data.map((product, index)=>{
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesk> {product.desk} </ProductDesk>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
     )
 }
 
 export default Products
 