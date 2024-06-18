import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer";

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
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                    <a className="nav-link" href="#">
                      Features
                    </a>
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                    <a className="nav-link disabled" aria-disabled="true">
                      Disabled
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/customer" element={<Customer></Customer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
