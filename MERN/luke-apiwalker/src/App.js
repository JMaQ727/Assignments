import './App.css';
import {
    BrowserRouter, //this allows us to enable routing for the application
    Switch, //this allows us to tell react which components/elements will show conditionally based on the route
    Route, //this allows us to specify the route for a component/element
    Link, //just like an anchor tag but it will not reload the whole page
} from "react-router-dom";
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
