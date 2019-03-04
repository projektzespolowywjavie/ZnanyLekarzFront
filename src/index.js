import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './components/Register';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <BrowserRouter>
            <Switch>
                <Route path='/register' component={Register} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
