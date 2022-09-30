import './App.css';
import {useState} from 'react';

function App() {
  const [age, setAge] = useState();
  const [upper, setUpper] = useState(0);
  const [lower, setLower] = useState(0);

  function calculate(){
    setLower((220-age)*0.65);
    setUpper((220-age)*0.85);
  }

  return(
    <div>
      <h1>Heart rate limits calculator</h1>
      <form>
        <div>
          <label>Age</label>
        </div>
          <div>
            <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
          <div>
            <label>Heart rate limits</label>
        </div>
           <div>
            <output>{lower.toFixed(0)}-{upper.toFixed(0)}</output>
          </div>
           <div>
            <button type="button" onClick={calculate}>Calculate</button>
           </div>
      </form>
    </div>
  );
}

export default App;
