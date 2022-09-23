import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyLibraryTab from "./MyLibrary";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/MyLibraryTab",
  component: MyLibraryTab,
} as ComponentMeta<typeof MyLibraryTab>;

const Template: ComponentStory<typeof MyLibraryTab> = () => (
  <BrowserRouter>
    <MyLibraryTab />
  </BrowserRouter>
);

export const Primary = Template.bind({});