import './HomePage.css';
//import { products } from '../../starting-code/data/products';
import { Header } from '../../components/header';
import { ProductsGrid } from './ProductsGrid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';


export function HomePage({ cart, loadCart }) {

    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');


    useEffect(() => {
        const getHomeData = async () => {

            const urlPath = search ? `/api/products?search=${search}` : '/api/products';
            const response = await axios.get(urlPath);

            setProducts(response.data);
        };

        getHomeData();
    }, [search]);




    return (
        <>
            <title>Home-Page</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <Header cart={cart} />
            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
            </div>
        </>
    );
}