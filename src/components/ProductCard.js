import React from 'react'

export default function ProductCard(props) {
    const {title, image, description, price, inStock } = props;
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <span>{price}</span>
                <span>{inStock ? "In Stock!" : "Available Soon"}</span>
            </div>
        </div>
    )
}

// const Container = styled.div`
//     width: 185px;
//     height: 210px;
//     border: 1px solid grey;
//     border-radius: 5px;
//     display: flex;
//     flex-flow: column nowrap;
//     margin: 10px;
//     :hover {
//         background-color: whitesmoke;
//     }
// `;

// const Image = styled.img`
//     max-height: 60%;
//     width: auto;
// `;

// const Title = styled.h3`

// `;

// const Description = styled.p`
    
// `;

// const PriceStockGroup = styled.div`
//     display: flex;
// `;

// const Price = styled.span`
    
// `;

// const InStock = styled.span`
    
// `;