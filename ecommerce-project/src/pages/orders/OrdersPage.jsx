import axios from 'axios';
import { useState, useEffect } from 'react';
import './OrdersPage.css';
import { Header } from '../../components/header';
import { OrdersGrid } from './OrdersGrid';


export function OrdersPage({ cart , loadCart}) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () =>{
             const response = await axios.get('/api/orders?expand=products');
           
             setOrders(response.data);
             await loadCart();  
        };
          fetchOrders(); 

         
    }, [loadCart])
    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

            <Header cart={cart} loadCart={loadCart} />

           

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </>
    )
}