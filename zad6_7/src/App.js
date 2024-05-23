import React, { useState } from "react";
import './App.css';

function Header({ fontSize, fontColor, likes }) {
    return (
        <div className="header">
            <h1>Nagłówek</h1>
            <p>Aktualny rozmiar czcionki: <strong>{fontSize}</strong></p>
            <p>Aktualny kolor czcionki: <strong>{fontColor}</strong></p>
            <p>Liczba lajków: <strong>{likes}</strong></p>
        </div>
    );
}

function Sidebar({ fontSizeInput, fontColorInput, handleChange, handleButtonClick }) {
    return (
        <div className="sidebar">
            <input type="text" value={fontSizeInput} onChange={(e) => handleChange("fontSizeInput", e.target.value)} />
            <input type="text" value={fontColorInput} onChange={(e) => handleChange("fontColorInput", e.target.value)} />
            <button onClick={handleButtonClick}>Ustaw parametry tekstu na 20px i pink.</button>
        </div>
    );
}

function MainArea({ fontSize, fontColor }) {
    return (
        <div className="main-area" style={{ fontSize: fontSize, color: fontColor }}>
            <p>Szkielety programistyczne w aplikacjach internetowych: Node, MongoDB, Express, React.</p>
        </div>
    );
}

function Footer({ handleFooterButtonClick, handleLikeButtonClick}) {

    return (
        <footer className="footer">
            <p>
                Stopka <button onClick={handleFooterButtonClick}>Ustaw parametry tekstu na 30px, a kolor pozostaw bez zmian.</button>
            </p>
            <p>
                <button onClick={handleLikeButtonClick}>Polub tę stronę!</button>
            </p>
        </footer>
    );
}

function App() {
    const [fontSize, setFontSize] = useState("18px");
    const [fontColor, setFontColor] = useState("green");
    const [fontSizeInput, setFontSizeInput] = useState("18px");
    const [fontColorInput, setFontColorInput] = useState("green");
    const [likes, setLikes] = useState(0);

    const handleChange = (name, value) => {
        if (name === "fontSizeInput") {
            setFontSizeInput(value);
        } else if (name === "fontColorInput") {
            setFontColorInput(value);
        }
    };

    const handleButtonClick = () => {
        if (!fontSizeInput && !fontColorInput){
            setFontSize("20px");
            setFontColor("pink");
        } else {
            setFontSize(fontSizeInput);
            setFontColor(fontColorInput);
        }


    };

    const handleFooterButtonClick = () => {
        setFontSize("30px");
    };

    const handleLikeButtonClick = () => {
        setLikes(prevState => prevState + 1);
    };

    return (
        <div className="grid-parent">
            <Header fontSize={fontSize} fontColor={fontColor} likes={likes} />
            <Sidebar fontSizeInput={fontSizeInput} fontColorInput={fontColorInput} handleChange={handleChange} handleButtonClick={handleButtonClick} />
            <MainArea fontSize={fontSize} fontColor={fontColor} />
            <Footer handleFooterButtonClick={handleFooterButtonClick} handleLikeButtonClick={handleLikeButtonClick}/>
        </div>
    );
}

export default App;
