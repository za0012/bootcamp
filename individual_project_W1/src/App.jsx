import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Country(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>국가명</th>
                        <th>금메달</th>
                        <th>은메달</th>
                        <th>동메달</th>
                        <th>액션</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.country.countryName}</th>
                        <th>{props.country.gold}</th>
                        <th>{props.country.silver}</th>
                        <th>{props.country.copper}</th>
                        <th>
                            <button>삭제</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function App() {
    const [countrys, setCountrys] = useState([
        {
            id: 1,
            countryName: '대한민국',
            gold: 0,
            silver: 0,
            copper: 0,
        },
    ]);
    const [countryName, setCountryName] = useState('');
    const [gold, setGold] = useState('');
    const [silver, setSilver] = useState('');
  const [copper, setCopper] = useState('');
  const addCountry = () => {
    const newCountry = {
        countryName: countryName,
        gold: gold,
        silver: silver,
        copper: copper,
    };
  }
    return (
        <>
            <div className="medal_box">
                <h1>2024 파리 올림픽</h1>
                <form className="input_group">
                    <div className="input_box">
                        <label>국가명</label>
                        <input
                            value={countryName}
                            onChange={(e) => {
                                setCountryName(e.target.value);
                            }}
                            type="text"
                            placeholder="국가 입력"
                        ></input>
                    </div>
                    <div className="input_box">
                        <label>금메달</label>
                        <input
                            value={gold}
                            onChange={(e) => {
                                setGold(e.target.value);
                            }}
                            type="number"
                            min={0}
                            step={1}
                        ></input>
                    </div>
                    <div className="input_box">
                        <label>은메달</label>{' '}
                        <input
                            value={silver}
                            onChange={(e) => {
                                setSilver(e.target.value);
                            }}
                            type="number"
                            min={0}
                            step={1}
                        ></input>
                    </div>
                    <div className="input_box">
                        <label>동메달</label>
                        <input
                            value={copper}
                            onChange={(e) => {
                                setCopper(e.target.value);
                            }}
                            type="number"
                            min={0}
                            step={1}
                        ></input>
                    </div>{' '}
                    <div className="button_group">
                        <button type="submit">국가추가</button>
                        <button onClick={() => {}}>업데이트</button>
                    </div>
                </form>
                <div>
                    {countrys.map((country) => {
                        return <Country country={country} key={country.id} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
