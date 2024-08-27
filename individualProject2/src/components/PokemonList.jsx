import React from 'react';
import styled from 'styled-components';
import '../css/main.css';

const ListContainer = styled.div`
    border: 1px solid red;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    background-color: rgb(240, 240, 240);
    padding: 20px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
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

const PokemonList = ({ pokemonList, onAddPokemon }) => {
    return (
        <ListContainer>
            {pokemonList.map((pokemon) => (
                <div className="pokeMonBox" key={pokemon.id}>
                    <div onAdd={() => {}}>
                        <img src={pokemon.img_url} alt={''} />
                        <p>{pokemon.korean_name}</p>
                        <p>{`NO.0${pokemon.id}`}</p>
                        <Button onClick={() => {}}>추가</Button>
                        {/* {isSelected ? (
                                <Button onClick={() => {}}>삭제</Button>
                            ) : (
                                <Button onClick={() => {}}>추가</Button>
                            )}
                        ; isSelected={false} */}
                    </div>
                </div>
            ))}
        </ListContainer>
    );
};

export default PokemonList;
