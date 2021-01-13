import React from 'react'
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./containers/main/main";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    )
}

export default App
