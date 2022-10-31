import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import CategoriesNav from './components/CategoriesNav';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CategoriesNav></CategoriesNav>
      <div className='container'> 
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/Login' element={<Products></Products>}/>
          <Route path='/Register' element={<Home></Home>}/>
          <Route path='/2x2' element={<Home></Home>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
