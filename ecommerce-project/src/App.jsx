import { Routes,Route} from 'react-router';
import { HomePage } from './pages/Hompage'
import './App.css'
function App() {

  return (

    <Routes>
      <Route index element={<HomePage/>} />
      <Route path="checkout" element={<div>Test checkout pge</div>} />
    </Routes>
  )
}

export default App
