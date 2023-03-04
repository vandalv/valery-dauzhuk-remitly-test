import {render, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyConverter from '../CurrencyConverter';

test('check if <CurrencyConverter /> component gets rendered', () => {
    render(<CurrencyConverter />);
    const element = screen.getByTestId('3');
    expect(element).toBeInTheDocument();
});