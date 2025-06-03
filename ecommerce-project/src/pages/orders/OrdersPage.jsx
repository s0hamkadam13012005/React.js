import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrdersPage.css';
import { Header } from '../../components/header';
import { OrdersGrid } from './OrdersGrid';


export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () =>{
             const response = await axios.get('/api/orders?expand=products');
           
             setOrders(response.data);
        };
        fetchOrders();     
    }, [])
    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

            <Header cart={cart} />

            <div className="header">
                <div className="left-section">
                    <a href="/" className="header-link">
                        <img className="logo"
                            src="images/logo-white.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </a>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link active" href="/orders">

                        <span className="orders-text">Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">3</div>
                        <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders}/>
            </div>
        </>
    )
}