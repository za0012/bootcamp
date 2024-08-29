import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ListContainer = styled.div`
    width: 600px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

const Card = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

const Button = styled.button`
    width: 100px;
    height: 100px;
    border: 1px solid red;
    margin: 20px;
`;

const PokemonList = ({ pokemonList, onAddPokemon }) => {
    const navigate = useNavigate();
    
    return (
        <ListContainer>
            {pokemonList.map((pokemon) => (
                <div onClick={() => navigate(`${pokemon.id}`)}>
                    <img src={pokemon.img_url} alt={''} />
                    <p>{pokemon.korean_name}</p>
                    <p>{pokemon.id}</p>
                    <Button onClick={() => {}}>추가</Button>
                </div>
            ))}
        </ListContainer>
    );
};

export default PokemonList;
