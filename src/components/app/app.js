import React, {Component} from 'react';
import Container from "../container";
import "./app.css"
import {Routes, Router,Route} from "react-router-dom";
import Dashboard from "../container/dashboard";
import Success from "../container/success";



class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Container />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </div>
        );
    }
}

export default App;