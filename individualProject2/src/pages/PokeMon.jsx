import { React, useState } from 'react';
import '../css/main.css';
import MOCK_DATA from '../mock';

//컴포넌트 불러오기
import Dashboard from '../components/Dashboaard';
import PokemonList from '../components/PokemonList';

function PokeMon() {
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const addPokemon = (pokemon) => {
        // {* 포켓몬을 선택하는 로직을 완성해봅시다 *}
    };

    const removePokemon = (pokemon) => {
        // {* 제거는 필터를 이용해 봅시다 *}
    };

    return (
        <div className="secoundBox">
            <div className="mainBox">
                <Dashboard selectedPokemon={selectedPokemon} onRemovePokemon={removePokemon} />
                <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
            </div>
        </div>
    );
}

export default PokeMon;
