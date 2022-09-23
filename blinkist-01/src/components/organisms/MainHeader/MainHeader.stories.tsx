import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MainHeader from "./MainHeader";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/MainHeader",
  component: MainHeader,
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = () => (
  <Router>
    <MainHeader />
  </Router>
);

export const Primary = Template.bind({});
