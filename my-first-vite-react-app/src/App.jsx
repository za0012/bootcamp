import React from 'react';

const App = () => {
    return (
        <div>
            <GrandFather />
        </div>
    );
};

const GrandFather = () => {
    const GrandFatherName = '최할지';
    return <Father GrandFatherName={GrandFatherName} />;
};

const Father = (p) => {
    return <Child GrandFatherName={p.GrandFatherName} />;
};

const Child = (p) => {
    return <p>{`할아버지 이름은 ${p.GrandFatherName}입니다.`}</p>;
};

export default App;
