import React from 'react'
import styled from "styled-components";

export default function ProductCard(props) {
    const {title, image, description, price, inStock } = props;
    return (
        <Container>
            <Image src={image} alt={title} />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <PriceStockGroup>
                <Price>{price}</Price>
                <InStock>{inStock ? "In Stock!" : "Available Soon"}</InStock>
            </PriceStockGroup>
        </Container>
    )
}

const Container = styled.div`
    width: 185px;
    height: 210px;
    border: 1px solid grey;
    border-radius: 5px;
    display: flex;
    flex-flow: column nowrap;
    margin: 10px;
    :hover {
        background-color: whitesmoke;
    }
`;

const Image = styled.img`
    max-height: 60%;
    width: auto;
`;

const Title = styled.h3`

`;

const Description = styled.p`
    
`;

const PriceStockGroup = styled.div`
    display: flex;
`;

const Price = styled.span`
    
`;

const InStock = styled.span`
    
`;