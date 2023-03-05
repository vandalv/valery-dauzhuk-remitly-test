import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import RecievedAmount from '../RecievedAmount';

test('check if <RecievedAmount /> component gets rendered', () => {
    const mockProps = {
    recivedAmountData: 10,
    updateSendAmountData: jest.fn(),
    updateRecivedAmountData: jest.fn(),
    currencyExchangeData: 1.23
    };
    render(<RecievedAmount {...mockProps} />);
    const element = screen.getByTestId('1');
    expect(element).toBeInTheDocument();
});

test('check if <RecievedAmount /> correctly calculates result after getting int value as input and correctly rounds result', () => {
    const mockProps = {
    recivedAmountData: 10,
    updateSendAmountData: jest.fn(),
    updateRecivedAmountData: jest.fn(),
    currencyExchangeData: 5.3147
    };
    render(<RecievedAmount {...mockProps} />);
    const element = screen.getByTestId('4');
    expect(element).toHaveValue('53.14');
});

test('check if <RecievedAmount /> correctly calculates result after getting zero as input and correctly rounds result', () => {
    const mockProps = {
    recivedAmountData: 0,
    updateSendAmountData: jest.fn(),
    updateRecivedAmountData: jest.fn(),
    currencyExchangeData: 5.3147
    };
    render(<RecievedAmount {...mockProps} />);
    const element = screen.getByTestId('4');
    expect(element).toHaveValue('0.00');
});

test('check if <RecievedAmount /> correctly calculates result after getting decimal value and correctly rounds it', () => {
    const mockProps = {
    recivedAmountData: 0.56,
    updateSendAmountData: jest.fn(),
    updateRecivedAmountData: jest.fn(),
    currencyExchangeData: 5.3147
    };
    render(<RecievedAmount {...mockProps} />);
    const element = screen.getByTestId('4');
    expect(element).toHaveValue('2.97');
});