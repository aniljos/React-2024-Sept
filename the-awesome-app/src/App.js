
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import { Login } from './components/Login';
import GadgetStore from './components/GadgetStore';
import AppBar from './components/AppBar';
import AppErrorBoundary from './errors/AppErrorBoundary';



function App() {

  return (
    <Router>

      <div className='container-fluid'>

        <AppBar />

        <main>
          <AppErrorBoundary>
            <Routes>
              <Route path='/' element={<Counter initialvalue={10} />} />
              <Route path="/products" element={<ListProducts />} />
              <Route path='/login' element={<Login />} />
              <Route path='/products/:id' element={<EditProduct />} />
              <Route path='/gadgets' element={<GadgetStore />} />
              <Route path='/viewcart' element={<div>View Cart</div>} />
            </Routes>
          </AppErrorBoundary>
        </main>
      </div>

    </Router>
  );
}

export default App;
