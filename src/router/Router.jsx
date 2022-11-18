import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../components/pages/Home';
import Discover from '../components/pages/Discover';
import Join from '../components/pages/Join';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/joined" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;