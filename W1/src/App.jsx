import React, { useState } from 'react';
const App = () => {
    const [user, setUser] = useState({
        name: '홍길동',
        age: 25,
    });
    const [items, setItems] = useState(['사과', '바나나', '오렌지', '포도', '감귤', '망고', '수박', '딸기']);
    const [inputFruit, setInputFruit] = useState('');
    const { name, age } = user;
    const addNewItem = function (e) {
        e.preventDefault();
        const newArr = [...items, inputFruit];
        setItems(newArr);
    };
    return (
        <div>
            <h1>사용자 정보</h1>
            <p>이름: {name}</p>
            <p>나이: {age}</p>
            <h2>사용자의 아이템 목록</h2>
            <form onSubmit={addNewItem}>
                <input
                    value={inputFruit}
                    onChange={(e) => {
                        const newText = e.target.value;
                        setInputFruit(newText);
                    }}
                />
                <button type="submit">제출</button>
            </form>
            <ul>
                <button
                    onClick={() => {
                        //사과, 바나나, 오렌지 출력
                        items.forEach(function (item) {
                            console.log(item);
                        });
                    }}
                >
                    콘솔로그 출력 버튼!!!
                </button>
                {/* li태그를 만들어내기 전에 사과는 없애줘!!! */}
                {items
                    .filter((i) => i !== '사과')
                    .map((item) => (
                        <li key={item}>
                            {item}
                            <button
                                onClick={() => {
                                    alert(item);
                                    const filteredItems = items.filter(function (아이템) {
                                        if (아이템 === item) {
                                            return false;
                                        } else {
                                            return true;
                                        }
                                    });
                                    setItems(filteredItems);
                                }}
                            >
                                삭제
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};
export default App;
