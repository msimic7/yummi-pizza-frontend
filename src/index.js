import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import store from "./store";
import "normalize.css";
import "./index.scss";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/order">
                    <Order />
                </Route>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById("root")
);
