import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../src/layouts/Footer";
import Header from "../src/layouts/Header";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import UserAccount from "../src/pages/UserAccount";
import PrivateRoute from "./components/PrivateRoute";


const App = ()=> {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/user-account' element={<UserAccount />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
