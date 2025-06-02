import './HomePage.css';
//import { products } from '../../starting-code/data/products';
import { Header } from '../../components/header';
import { ProductsGrid } from './ProductsGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function HomePage({ cart }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {

          const response = await axios.get('http://localhost:3000/api/products')

            setProducts(response.data);
        };

getHomeData();
    }, []);




    return (
        <>
            <title>Home-Page</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}