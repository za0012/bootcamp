import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(248, 248, 248);
    margin-bottom: 20px;
    border-radius: 10px;
`;

const Dashboard = ({ selectedPokemon }) => {
    return (
        <DashboardContainer>
            <h2>도감</h2>
            {selectedPokemon.length === 0 ? (
                <p>선택된 포켓몬이 없습니다.</p>
            ) : (
                <ul>
                    {selectedPokemon.map((pokemon) => (
                        <li key={pokemon.id}>{pokemon.korean_name}</li>
                    ))}
                </ul>
            )}
        </DashboardContainer>
    );
};

export default Dashboard;
