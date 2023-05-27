import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Sorm from "./components/Sorm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
