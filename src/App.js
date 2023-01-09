import "./App.css";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "./css/Home.css";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Footer from "./components/footer/footer";
import logo from "./images/cross.pmg.jpeg";
// import showMenu from "./components/mobileMenu/showMenu";
// import hideMenu from "./components/mobileMenu/hideMenu";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <div className="nav-links" id="navLinks">
            <img
              src="Images/black-circle-close-button-png-5.png"
              alt="circle close button icon"
              className="sidebtn"
              // onclick={hideMenu()}
            />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="products">Products</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <img
            src="Images/menu_icon.png"
            alt="menu bars icon"
            className="sidebtn"
            // onclick={showMenu()}
          />
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
