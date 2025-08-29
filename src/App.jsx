import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Customer from "./container/customer/index"
import Product from "./container/product/index"
import Layout from "./components/layout"
import Dashboard from "./container/dashboard/index"
import Income from "./container/income/index"
import Promote from "./container/promote/index"
import Help from "./container/help/index"
import Upgrade from "./container/upgrade/index"

function App() {


  return (
    <>

     


      <div>
        <Layout />
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
          <Route path="/upgrade" element={<Upgrade />} />

        </Routes>


      </div>


    </>
  )
}

export default App
