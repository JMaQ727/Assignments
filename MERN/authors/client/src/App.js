import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authors from "./components/Authors";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
    return (
        <div className="App container">
            <BrowserRouter>
                <h1>Favorite Authors</h1>
                <Switch>
                    <Route exact path="/">
                        <Authors />
                    </Route>
                    <Route exact path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/authors/:id">
                        <Edit />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
