import React from 'react';
//react-router-dom을 사용하기 위해 api import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from '../pages/Intro';
import PokeMon from '../pages/PokeMon';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="PokeMon" element={<PokeMon />} />
                <Route path="Detail" element={<PokeMon />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
