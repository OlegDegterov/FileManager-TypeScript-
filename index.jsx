import ReactDOM from 'react-dom'
import React from 'react'
import axios from 'axios';
import App from "./App/App";
import store from "./App/Redux/reduxStore";
import {Provider} from "react-redux";
/*const propsValues = axios.get("http://164.90.161.80:3000/api/content")
    .then(response => {
        let data = response.data.children;
        console.log(data)
    })*/

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("app")
);