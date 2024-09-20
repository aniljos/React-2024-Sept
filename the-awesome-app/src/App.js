
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import { Login } from './components/Login';
import GadgetStore from './components/GadgetStore';
import AppBar from './components/AppBar';
import AppErrorBoundary from './errors/AppErrorBoundary';
import SearchWithTransition from './components/SearchWithTransition';
import SearchWithDeferredValue from './components/SearchWithDeferredValue';
import React, { Suspense } from 'react';
import ProtectedRoute from './hoc/ProtectedRoute';

//import ListProducts from './components/ListProducts';
const ListProducts = React.lazy(() => import('./components/ListProducts'));



function App() {

  return (
    <Router basename='/react-app/'>

      <div className='container-fluid'>

        <AppBar />

        <main>
          <AppErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path='/' element={<Counter initialvalue={10} />} />
                <Route path="/products" element={<ProtectedRoute> <ListProducts /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/products/:id' element={<EditProduct />} />
                <Route path='/gadgets' element={<GadgetStore />} />
                <Route path='/search1' element={<SearchWithTransition />} />
                <Route path='/search2' element={<SearchWithDeferredValue />} />
                <Route path='/viewcart' element={<div>View Cart</div>} />
              </Routes>
            </Suspense>
          </AppErrorBoundary>
        </main>
      </div>

    </Router>
  );
}

export default App;
