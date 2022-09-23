import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';
import '@testing-library/jest-dom';

const mockedHandleChange = jest.fn();

describe('Search Input', () => {
    test('Should display the search input dialog', () => {
        render(<SearchInput onChange={mockedHandleChange} />);
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeTruthy();
        expect(searchInput).toBeVisible();
        const inputField = screen.getByPlaceholderText("Search by Title or Author");
        expect(inputField).toBeTruthy();
        expect(inputField).toBeVisible();
    });

    test("Should invove handle change on entering input", () => {
        render(<SearchInput onChange={mockedHandleChange} />);
        const searchInput = screen.getByTestId("searchInput");
        expect(searchInput).toBeTruthy();
        expect(searchInput).toBeVisible();
        const inputField = screen.getByPlaceholderText("Search by Title or Author");
        fireEvent.change(inputField, { target: { value: "Dropshipping" } });
        fireEvent.change(inputField, { target: { value: "" } });
    })

});