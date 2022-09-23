import React from "react";
import DefaultButton from "./DefaultButton";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe('Default Button', ()=>{
    const mockedHandleClick = jest.fn();

    test('checking the default button label',()=>{
        render(<DefaultButton label="Click Me" variant="outlined" />);
        const defaultButton=screen.getByRole("button");
        expect(defaultButton).toBeTruthy();
        expect(defaultButton.textContent).toContain("Click Me");
    });

    test('checking the click of default button',()=>{
        render(<DefaultButton onClick={mockedHandleClick} label="Click Me" variant="outlined" />);
        const defaultButton=screen.getByRole("button");
        fireEvent.click(defaultButton);
    })
})