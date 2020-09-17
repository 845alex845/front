import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import ModuloCarga from './ModuloCarga';
import {ProtectedRoute} from "./Protected.route";

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={Login} />
                <ProtectedRoute exact path="/modulo-carga" component={ModuloCarga}/>
            </React.Fragment>
        </BrowserRouter>
    );
}

export default App;
