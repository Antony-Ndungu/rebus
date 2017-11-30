import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Login from "./Login";

const App = () => {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/" render={ () => <div><Link to="/login">login</Link></div>}/>
            <Route  path="/login" component={Login}/>
        </div>
        </BrowserRouter>
    );
}

export default App;


