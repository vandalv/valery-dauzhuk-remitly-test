import React, { useState, useEffect } from 'react';
import RecievedAmount from './RecievedAmount';
import SendAmount from './SendAmount';


function CurrencyConverter(){

    const [sendAmountData, setSendAmountData] = useState(0);
    const [recivedAmountData, setRecivedAmountData] = useState(0);
    const [currencyExchangeData, setCurrencyExchangeData] = useState(1);

    useEffect(() => {
        fetch('http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json')
        .then(response => response.json())
        .then(data => {setCurrencyExchangeData(data.rates[0].mid)})
        .catch(error => console.log(error));
    }, []);

    const updateSendAmountData = (newData) => {
        setSendAmountData(newData);
    };
    
    const updateRecivedAmountData = (newData) => {
        setRecivedAmountData(newData);
    }

    return (
        <div data-testid='3'>
        <div className='centered'>
        <div className="ui compact raised segment rounded">
            <h3>You send</h3>
            <SendAmount sendAmountData={sendAmountData} updateRecivedAmountData={updateRecivedAmountData} updateSendAmountData={updateSendAmountData} currencyExchangeData={currencyExchangeData}/>
            <h3>They receive</h3>
            <RecievedAmount recivedAmountData={recivedAmountData} updateSendAmountData={updateSendAmountData} updateRecivedAmountData={updateRecivedAmountData} currencyExchangeData={currencyExchangeData}/>
            <h3>1 GBP = {currencyExchangeData} PLN</h3>
        </div>
        </div>
        </div>
    )
}

export default CurrencyConverter;