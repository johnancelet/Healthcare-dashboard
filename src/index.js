import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// imported BrowserRouter from react-router-dom to make it possible navigation through the application
import {BrowserRouter} from 'react-router-dom';

//importing general styles
import general from './styles/general/general.css';



// This is the entry level 
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
