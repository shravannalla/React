import React from "react";
import { render, screen } from "@testing-library/react";
import { Progress } from "./Progress";
import "@testing-library/jest-dom";
import { LinearProgress } from "@mui/material";

describe('Profress bar',()=>{
    test('checking the progress bar',()=>{
        render(<Progress value={33}/>);
        const progressBar=screen.getByRole("progressbar");
        expect(progressBar).toBeVisible();
    })
})