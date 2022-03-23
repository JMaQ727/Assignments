import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import AllProducts from "./components/AllProducts";
import Details from "./components/Details";
import Edit from "./components/Edit";

function App() {
    let [formSubmitted, setFormSubmitted] = useState(false)
    return (
        <BrowserRouter>
            <div className="App container">
                <h1>Product Manager</h1>
                <Switch>
                    <Route exact path="/">
                        <Products formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>
                        <hr />
                        <AllProducts formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}/>
                    </Route>
                    <Route exact path="/details/:id">
                        <Details />
                    </Route>
                    <Route exact path="/edit/:id">
                        <Edit />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
