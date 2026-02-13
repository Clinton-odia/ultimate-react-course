import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("Need advice?");
  const [count, setCount] = useState(0);
  async function getadvice() {
    setAdvice("Loading...");
    try {
      const url = "https://api.adviceslip.com/advice";
      const data = await fetch(url);
      const res = await data.json();
      setAdvice(res.slip.advice);
      setCount((c) => c + 1);
    } catch (error) {
      setAdvice("Can't connect to API");
      console.error("the error is", error);
    }
  }
  useEffect(() => {
    getadvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getadvice}>Get Advice</button>
      {count > 5 && <p>you have read {count} of advice</p>}
    </div>
  );
}

export default App;
