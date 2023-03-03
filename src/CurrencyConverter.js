import React, { useState, useEffect } from 'react';
import RecievedAmount from './RecievedAmount';
import SendAmount from './SendAmount';


function CurrencyConverter(){

    const [dataA, setDataA] = useState(0);
    const [dataB, setDataB] = useState(0);
    const [currencyExchangeData, setCurrencyExchangeData] = useState(0);

    useEffect(() => {
        fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json')
        .then(response => response.json())
        .then(data => {setCurrencyExchangeData(data.rates[0].mid)})
        .catch(error => console.log(error));
    }, []);

    const updateDataA = (newData) => {
        setDataA(newData);
    };
    
    const updateDataB = (newData) => {
        setDataB(newData);
    }

    return (
        <div>
            <SendAmount dataA={dataA} updateDataB={updateDataB} updateDataA={updateDataA} currencyExchangeData={currencyExchangeData}/>
            <br/>
            <RecievedAmount dataB={dataB} updateDataA={updateDataA} updateDataB={updateDataB} currencyExchangeData={currencyExchangeData}/>
            <h3>1 GBP = {currencyExchangeData} PLN</h3>
        </div>
    )
}

export default CurrencyConverter;