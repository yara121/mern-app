import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "reactstrap";
import Navigation from "./components/NavBar";
import { Home, Login } from "./pages";

function App() {
  return (
    <div>
      
      <Container>
      <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} exact />
      
      </Container>
    </div>
  );
}

export default App;
