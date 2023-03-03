import React, { useState } from 'react';

function SendAmount({dataA, updateDataB, updateDataA, currencyExchangeData}){

    const [value, setValue] = useState(0);
    const [isInputSelected, setIsInputSelected] = useState(false);

    const handleInputFocus = () => {
        setValue(calculateRecievedAmount().toFixed(2));
        updateDataB(calculateRecievedAmount());
        setIsInputSelected(true);
    };
    
    const handleInputBlur = () => {
        updateDataA((value*currencyExchangeData).toFixed(2));
        setIsInputSelected(false);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (/^(?!0\d)(\d*\.?\d{0,2})$/.test(inputValue)) {
        setValue(inputValue);
        updateDataB(inputValue);
        }
    };

    function calculateRecievedAmount() {
        let exchangeResult = dataA / currencyExchangeData;
        return exchangeResult;
    }

    return <input type="text" value={isInputSelected ? value : calculateRecievedAmount().toFixed(2)} onChange={handleChange} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
}

export default SendAmount;