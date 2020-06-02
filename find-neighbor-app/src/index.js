import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import FindNeighbor from "./components/FindNeighbor";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <FindNeighbor />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();