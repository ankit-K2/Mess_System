import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";
import ItemsContainer from "./components/ItemsContainer ";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerData from "./components/CustomerData/CustomerData";
import AddCustomer from "./components/AddCustomer/AddCustomer";
import TiffinService from "./components/TiffinService/TiffinService";
import CustomerProfile from "./components/CustomerData/CutomerProfile";
import Payment from "./components/AddCustomer/Payment";

function App() {
  const [Admin, setAdmin] = useState(false);

  return (
    <BrowserRouter>
      <Navbar setAdmin={setAdmin} Admin={Admin} />

      <Routes>
        <Route
          path="/"
          index
          element={Admin ? <ItemsContainer /> : null}
        ></Route>
        <Route
          path="/customerData"
          element={Admin ? <CustomerData /> : <h1>Page Not Found</h1>}
        ></Route>
        <Route
          path="/addCustomer"
          element={Admin ? <AddCustomer /> : <h1>Page Not Found</h1>}
        ></Route>
        <Route
          path="/customerProfile"
          element={Admin ? <CustomerProfile /> : <h1>Page Not Found</h1>}
        ></Route>
        <Route path="/tiffinService" element={<TiffinService />}></Route>
        <Route path="/addCustomer/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
