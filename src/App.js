import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import MoviesForm from "./components/movieForm";
import "./App.css";
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MoviesForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={LoginForm} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
