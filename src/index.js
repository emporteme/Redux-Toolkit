import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './store'
import { Ptovider } from 'react-redux'


ReactDOM.render(
    <React.StrictMode>
        <Ptovider store={store}>
            <App />
        </Ptovider>
    </React.StrictMode>,
    document.getElementById('root'),
)
