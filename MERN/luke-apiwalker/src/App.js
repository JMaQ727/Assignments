import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import People from './components/People';
import APIForm from './components/APIForm';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
    return (
    <BrowserRouter>
        <div className="App container">
            <h1>LUKE APIWALKER</h1>
            <APIForm/>
            <Switch>
                <Route exact path ="/people/:id">
                    <People/>
                </Route>
                <Route exact path ="/planets/:id">
                    <Planets/>
                </Route>
                <Route exact path ="/error">
                    <Error/>
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
    );
}

export default App;
