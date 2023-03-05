import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import SendAmount from '../SendAmount';

test('check if <SendAmount /> component gets rendered', () => {
    const mockProps = {
    sendAmountData: 10,
    updateSendAmountData: jest.fn(),
    updateRecivedAmountData: jest.fn(),
    currencyExchangeData: 1.23
    };
    render(<SendAmount {...mockProps} />);
    const element = screen.getByTestId('2');
    expect(element).toBeInTheDocument();
});

test('check if <SendAmount /> correctly calculates result after getting int value as input and correctly rounds it', () => {
    const mockProps = {
        sendAmountData: 53147,
        updateSendAmountData: jest.fn(),
        updateRecivedAmountData: jest.fn(),
        currencyExchangeData: 5.3147
        };
        render(<SendAmount {...mockProps} />);
        const element = screen.getByTestId('5');
        expect(element).toHaveValue('10000.00');
});

test('check if <SendAmount /> calculates result after getting zero as input and correctly rounds it', () => {
    const mockProps = {
        sendAmountData: 0,
        updateSendAmountData: jest.fn(),
        updateRecivedAmountData: jest.fn(),
        currencyExchangeData: 5.3147
        };
        render(<SendAmount {...mockProps} />);
        const element = screen.getByTestId('5');
        expect(element).toHaveValue('0.00');
});

test('check if <SendAmount /> calculates result after getting decimal value and correctly rounds it', () => {
    const mockProps = {
        sendAmountData: 0.55,
        updateSendAmountData: jest.fn(),
        updateRecivedAmountData: jest.fn(),
        currencyExchangeData: 5.3147
        };
        render(<SendAmount {...mockProps} />);
        const element = screen.getByTestId('5');
        expect(element).toHaveValue('0.10');
});

test('check if <SendAmount /> correctly calculates result after getting small decimal value(0.01 grosz recived should be after 0.01 penny send, when currencyExchangeData > 1, though actual result - 0.0018815737482831)', () => {
        const mockProps = {
        sendAmountData: 0.01,
        updateSendAmountData: jest.fn(),
        updateRecivedAmountData: jest.fn(),
        currencyExchangeData: 5.3147
        };
        render(<SendAmount {...mockProps} />);
        const element = screen.getByTestId('5');
        expect(element).toHaveValue('0.01');
});
