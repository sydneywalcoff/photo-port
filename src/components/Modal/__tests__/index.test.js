import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

const mockSetToggleModal = jest.fn();

afterEach(cleanup);


describe('Modal component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} />)
    });

    it('matches the snapshot', () => {
        const { asFragment } = render(< Modal currentPhoto={currentPhoto} />);

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Click event', () => {
    it('calls onClose handler', ()=> {
        const { getByText } = render(<Modal
            onClose={mockSetToggleModal}
            currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));

        expect(mockSetToggleModal).toHaveBeenCalledTimes(1);
    });
});