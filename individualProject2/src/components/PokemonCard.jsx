import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 500px;
    height: 100px;
    border: 1px solid yellow;
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
`;

const Button = styled.button`
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    border: none;
    background-color: rgb(255, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 5px;
`;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
    console.log(pokemon);
    return (
        <Card>
            <img src={pokemon.img_url} alt={''} />
            <p>{pokemon.korean_name}</p>
            {isSelected ? <Button onClick={() => {}}>삭제</Button> : <Button onClick={() => {}}>추가</Button>}
        </Card>
    );
}

export default PokemonCard;
