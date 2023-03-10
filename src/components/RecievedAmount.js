import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import FlagPL from '../images/poland-flag-icon.png';

function RecievedAmount({recivedAmountData, updateSendAmountData, updateRecivedAmountData, currencyExchangeData}){

    const [value, setValue] = useState(0);
    const [isInputSelected, setIsInputSelected] = useState(false);

    const handleInputFocus = () => {
        setValue(calculateSendAmount().toFixed(2));
        updateSendAmountData(calculateSendAmount());
        setIsInputSelected(true);
    };
    
    const handleInputBlur = () => {
        updateRecivedAmountData(value / currencyExchangeData);
        setIsInputSelected(false);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (/^(?!0\d)(\d*\.?\d{0,2})$/.test(inputValue)) {
        setValue(inputValue);
        updateSendAmountData(inputValue);
        }
    };

    function calculateSendAmount() {
        let exchangeResult = recivedAmountData * currencyExchangeData;
        return Math.floor(exchangeResult * 100) / 100;;
    }

    return (
        <div data-testid='1'>
        <a className="ui huge basic image label" href="/#">
        <Image src={FlagPL} size='big' className='flag-image'/>
        <div className="ui right transparent labeled input"><input data-testid='4' type="text" value={isInputSelected ? value : calculateSendAmount().toFixed(2)} onChange={handleChange} onFocus={handleInputFocus} onBlur={handleInputBlur} /></div>
        <span className="color-text">PLN</span>
        </a>
        </div>
    );
}

export default RecievedAmount;