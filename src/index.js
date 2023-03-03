import React from 'react';
import ReactDOM from "react-dom/client";
import CurrencyConverter from './components/CurrencyConverter';

const ref = document.getElementById('root');
const root = ReactDOM.createRoot(ref);

function App(){
    return(
        <div>
            <CurrencyConverter/>
        </div>
    )
}


root.render(<App />);