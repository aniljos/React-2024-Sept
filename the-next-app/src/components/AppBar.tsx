import Link from "next/link";


export default function AppBar(){

    return (
        <nav className={`navbar navbar-dark bg-dark`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">React</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link active" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}