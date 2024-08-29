import React from 'react';
import Router from '../shared/Router';
import { useNavigate, } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>포켓몬 도감</h1>
            <button className='HomeBtn' onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</button>
        </div>
    );
}

export default Home;
