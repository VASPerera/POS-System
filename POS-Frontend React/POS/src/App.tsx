import "./App.css";
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Order from "./components/Order";
import Calculator from "./components/Calculator";


function App() {
  return (
    <>
      <BrowserRouter>
      <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <div className="navbar-brand" >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Wattpad-logo-vector.svg" alt="" className="logo" />
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                    <Link className="nav-link" to="/customer">
                      Customers
                    </Link>
                    <Link className="nav-link" to="/orders">
                      Order Management
                    </Link>
                    <Link className="nav-link"to="/product">
                      Products
                    </Link>
                    <Link className="nav-link"to="/cal">
                      calculator
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/customer" element={<Customer></Customer>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/orders" element={<Order></Order>}></Route>
          <Route path="/cal" element={<Calculator></Calculator>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
