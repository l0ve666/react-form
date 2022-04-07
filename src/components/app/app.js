import React, {Component} from 'react';
import Container from "../container";
import "./app.css"
import {Routes, Router,Route} from "react-router-dom";
import Dashboard from "../container/dashboard";


class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        );
    }
}

export default App;