// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loging from './Pages/Loging/Loging';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import { AuthProvider } from './Pages/AuthProvider';
import Catalog from './Pages/Catalog/Catalog';
import ControlPro from './ControlPro/ControlPro';
import { Private } from './Pages/Loging/Private';
import Card from "./Cards/Card";
import "./App.css"
import "./index.css"
import "./carousel.css"
import ControlTSubmit from "./ControlPro/ControlTSubmit";
import Tshirt from "./Pages/Catalog/Tshirt";
import Error from "./Pages/Error/Error";
import ProView from "./Pages/ProductView/ProView";
import ProViewT from "./Pages/ProductView/ProViewT";
import PrivacyPolicy from "./Pages/Policy/PrivacyPolicy";
import Terms from "./Pages/Policy/Terms";
import Return from "./Pages/Policy/Return";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
                <Route path="/admin" element={<Loging />}/>
              <Route element = {<Private/>}>  
                <Route path="/admin/control" element={<ControlPro />} />
                <Route path="/admin/control/tshirt" element = {<ControlTSubmit />} />
            </Route>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/card" element={<Card />} />
            <Route path="/catalog/tshirts" element = {<Tshirt />} />
            <Route path='*' element = {<Error/>}/>
            <Route path="/productView" element = {<ProView/>} />
            <Route path="/productViewT" element = {<ProViewT /> } />
            <Route path="/privacy" element = {<PrivacyPolicy/>} />
            <Route path="/terms" element = {<Terms />} />
            <Route path="/return" element = {<Return />} />
            <Route path="/contact" element = {<Contact/>} />
            <Route path="/cart" element = {<Cart /> } />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
