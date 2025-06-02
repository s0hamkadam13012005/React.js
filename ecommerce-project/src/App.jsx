import { Routes,Route} from 'react-router';
import { useEffect, useState } from 'react';
import axios  from 'axios';
import { HomePage } from './pages/home/Homepage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css'
import { TrackingPage } from './pages/TrackingPage';
function App() {

   const [cart, setCart] = useState([]);

    useEffect(() => {
      const fetchAppdata = async () =>{

    
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    
  }

  fetchAppdata();
}, []);

  return (
    

    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart}/>} />
      <Route path="orders" element={<OrdersPage cart={cart}/>} />
      <Route path="tracking" element={<TrackingPage/>}/>

    </Routes>
  )
}

export default App
