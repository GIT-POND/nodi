import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductPage from './WebPages/ProductPage';
import ProductInfoPage from './WebPages/ProductInfoPage';
import LandingPage from './WebPages/LandingPage';


function App() {
  return (<>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/products' element={<ProductPage/>}/>
      <Route path='/product/:id' element={<ProductInfoPage/>}/>
    </Routes>
  </>);
}

export default App;
  
