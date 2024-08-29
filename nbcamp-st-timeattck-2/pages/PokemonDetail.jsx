import { useNavigate, useLocation } from 'react-router-dom';
import MOCK_DATA from '../mock';

function PokemonDetail() {
    const location = useLocation();
    const pokemonIdString = location.pathname.slice(5); // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.
    //console로 확인해보니 분명 id값이 잘 나오는데 포켓몬이 안 나와서 typrof로 확인해보니 
    //string이어서 읽히지 않음.
    //그래서 string을 다시 숫자로 변환
    const pokemonId = Math.floor(pokemonIdString);
    const pokemon = MOCK_DATA.find((p) => p.id === pokemonId);
    const navigate = useNavigate();

    if (!pokemon) {
        return <div>포켓몬을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h2>{pokemon.korean_name}</h2>
            <p>타입: {pokemon.types.join(', ')}</p>
            {/* {* onClick 이벤트를 완성해주세요. *} */}
            <button onClick={() => navigate('/dex')}>뒤로 가기</button>
        </div>
    );
}

export default PokemonDetail;
