import Message from './components/Message';
import Counter from './components/Counter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>

      <div className='container-fluid'>
        <nav className="navbar navbar-dark bg-dark">
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path='/' element={<div>Home</div>}/>
            <Route path="/products" element={<ListProducts/>}/>
            <Route path='/login' element={<div>Login</div>}/>
            <Route path='/products/:id' element={<EditProduct/>}/>
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default App;
