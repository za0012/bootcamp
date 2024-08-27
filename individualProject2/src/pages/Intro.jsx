import React from 'react';
import dogam from '../img/dogam.png';
import '../css/intro.css';
import { useNavigate, Navigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    return <div className="introDiv">
        <img className='dogam' src={dogam} alt='도감이미지'/>
        <button onClick={() => {
            navigate('/PokeMon');
        }}>무슨 포켓몬을 잡았니?</button>
    </div>;
};

export default Intro;