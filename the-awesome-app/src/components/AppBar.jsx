import { useContext } from 'react';
import { AppThemeContext } from '../state/context/AppThemeContext';
import { Link } from 'react-router-dom';

function AppBar(){

    const themeContext = useContext(AppThemeContext);
    const mode = themeContext.mode;

    function switchTheme(){
       
        //themeContext.changeMode(prevMode => prevMode === 'dark'? 'light' : 'dark');
        if(mode === 'light'){

            //dispatch an action
            themeContext.changeMode({type:'set_mode_dark'})
        }
        else{
            themeContext.changeMode({type:'set_mode_light'})
        }
        
        
    }

    return (
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
              <li className="nav-item">
                <Link className="nav-link" to="/search1">Search(Transitions)</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search2">Search(Defffered)</Link>
              </li>
              <li>
                <button className='btn btn-warning' onClick={switchTheme}>Switch Theme</button>
              </li>
            </ul>
          </div>
        </nav>
    )
}


export default AppBar;