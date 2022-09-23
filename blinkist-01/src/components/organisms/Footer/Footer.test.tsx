import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer visible or not',()=>{
    test("visibility",()=>{
        render(<Footer/>);
        const footer=screen.getByTestId("footer-container");
        expect(footer).toBeVisible();
    });
});
