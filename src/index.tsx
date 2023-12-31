import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import App from "./components/app/App";
import {store} from "./store/store";
// import {PersistGate} from "redux-persist/integration/react";
// import {persistor, store} from "./store/configureStore";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        {/*<PersistGate loading={null} persistor={persistor}>*/}
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        {/*</PersistGate>*/}
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
