import React from 'react';
import { render, cleanup, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..'

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact />)
    });

    it('matches snapshot',() => {
        const { asFragment } = render(<Contact/>);

        expect(asFragment()).toMatchSnapshot();
    });

    it('header is visible',() => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('header')).toHaveTextContent('Contact me');
    })

    it('button is visible', () => {
        const { getByTestId } = render(<Contact />);

        expect(getByTestId('contactButton')).toHaveTextContent('Submit');
    })
});