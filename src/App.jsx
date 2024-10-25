import { useState, useEffect } from 'react';
import Child from "./components(Lec5)/child/Child";
import Timer from "./components(Lec5)/timer/Timer"; 
import './App.css';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [hiddenWord] = useState("ananoo"); 
  const [typedWord, setTypedWord] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    setTypedWord(e.target.value);
  };

  return (
    <div>
      <Child />
      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
      <h1>Typed: {typedWord}</h1>
      {typedWord.includes(hiddenWord) && <h2>Hidden Word Found: {hiddenWord}</h2>}
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2</button>
      <input 
        type="text" 
        value={typedWord} 
        onChange={handleChange} 
        placeholder="Type here..." 
      />
      <Timer /> {}
    </div>
  );
}

export default App;
