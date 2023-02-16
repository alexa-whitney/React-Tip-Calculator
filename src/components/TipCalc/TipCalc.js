import React, { useState } from 'react';
import './TipCalc.css';

function TipCalc() {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [split, setSplit] = useState(1);
  
    const tipAmount = bill * (tipPercent / 100);
    const total = bill + tipAmount;
    const perPerson = total / split;
  
    return (
      <div className='container'>
        <label>
          Bill:
          <h1>
          <input
            type="number"
            value={bill}
            onChange={(event) => setBill(parseFloat(event.target.value))}
            min ="0"
          />
          </h1>
        </label>
        <br />
        <label>
          Tip %:
          <h1>
          <input
            type="number"
            value={tipPercent}
            // Use partInt() because the number type is actually a string!
            onChange={(event) => setTipPercent(parseInt(event.target.value))}
            min ="0"
          />
          </h1>
        </label>
        <br />
        <label>
          Split:
          <h1>
          <input
            type="number"
            value={split}
            onChange={(event) => setSplit(parseInt(event.target.value))}
            min ="1"
          />
          </h1>
        </label>
        <br />
        <div className='output'>
          <p>Tip Amount: ${tipAmount.toFixed(2)}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <p>Per Person: ${perPerson.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  export default TipCalc;