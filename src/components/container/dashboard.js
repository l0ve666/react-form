import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Dashboard() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <div>
                <p>asdasdasda</p>
            </div>
        </BrowserRouter>
    );
}

export default Dashboard;