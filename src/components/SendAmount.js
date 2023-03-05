import React, { useState } from 'react';
import { Image } from 'semantic-ui-react';
import FlagUK from '../images/united-kingdom-flag-icon.png';

function SendAmount({sendAmountData, updateRecivedAmountData, updateSendAmountData, currencyExchangeData}){

    const [value, setValue] = useState(0);
    const [isInputSelected, setIsInputSelected] = useState(false);

    const handleInputFocus = () => {
        setValue(calculateRecievedAmount().toFixed(2));
        updateRecivedAmountData(calculateRecievedAmount());
        setIsInputSelected(true);
    };
    
    const handleInputBlur = () => {
        updateSendAmountData((value*currencyExchangeData).toFixed(2));
        setIsInputSelected(false);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (/^(?!0\d)(\d*\.?\d{0,2})$/.test(inputValue)) {
        setValue(inputValue);
        updateRecivedAmountData(inputValue);
        }
    };

    function calculateRecievedAmount() {
            let exchangeResult = sendAmountData / currencyExchangeData;
            if(exchangeResult < 0.01 && exchangeResult > 0 && currencyExchangeData > 1){
                exchangeResult = 0.01;
            }
            return exchangeResult;
    }

    return (
        <div data-testid='2'>
        <a className="ui huge basic image label" href="/#">
        <Image src={FlagUK} size='big' className='flag-image'/>
        <div className="ui right transparent labeled input"><input data-testid='5' type="text" value={isInputSelected ? value : calculateRecievedAmount().toFixed(2)} onChange={handleChange} onFocus={handleInputFocus} onBlur={handleInputBlur} /></div>
        <span className="color-text">GBP</span>
        </a>
        </div>
    );
}

export default SendAmount;