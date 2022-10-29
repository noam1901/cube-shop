import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'> 
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/products' element={<Products></Products>}/>
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
