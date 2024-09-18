import Message from './components/Message';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import { Login } from './components/Login';
import GadgetStore from './components/GadgetStore';
import { useContext } from 'react';
import { AppThemeContext } from './state/context/AppThemeContext';

function App() {


  const themeContext = useContext(AppThemeContext);
  const mode = themeContext.mode;
  return (
    <Router>

      <div className='container-fluid'>
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">React</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gadgets">Gadget Store</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewcart">View Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path='/' element={<Counter initialvalue={10}/>}/>
            <Route path="/products" element={<ListProducts/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/products/:id' element={<EditProduct/>}/>
            <Route path='/gadgets' element={<GadgetStore/>}/>
            <Route path='/viewcart' element={<div>View Cart</div>}/>
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default App;
