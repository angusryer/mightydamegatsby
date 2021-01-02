import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import productImage from "../assets/AllThencoPadsMainImage.png";
// import axios from "axios";
import productData from '../seed/products.json';

export default function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productData);
		// axios.get("/api/products").then((res) => {
		// 	setProducts(res.data);
		// });
	}, []);

	return (
		<>
			<Helmet>
				<title>The Mighty Dame | Products and Services</title>
				<meta
					name='description'
					content="Women's health products and services"
				/>
			</Helmet>
			<h1>Our Products</h1>
			<ProductDisplayGrid>
				{products &&
					products.map((product) => {
						return (
							<ProductCard
								key={product.productId}
								image={productImage}
								title={product.title}
								description={product.description}
								price={product.price}
								inStock={product.inStock}
							/>
						);
					})}
			</ProductDisplayGrid>
		</>
	);
}

const ProductDisplayGrid = styled.section`
	display: flex;
	flex-flow: row wrap;
	align-content: center;
	justify-content: space-evenly;
	max-width: 1000px;
	margin: 0 auto;
`;
