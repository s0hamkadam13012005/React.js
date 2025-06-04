import { Routes,Route} from 'react-router';
import { useEffect, useState } from 'react';
import axios  from 'axios';
import { HomePage } from './pages/home/Homepage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';
function App() {

  window.axios = axios;

   const [cart, setCart] = useState([]);
const loadCart = async () =>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);

};
    useEffect(() => {

  loadCart();
}, []);

  return (
    

    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
<Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>}/>

    </Routes>
  )
}



export default App
