import React from "react";
import CardGrid from "./CardGrid";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { books } from "../../../data/bookdata.js";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/CardGrid",
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const Template: ComponentStory<typeof CardGrid> = (args) => (
  <Router>
    <CardGrid {...args} />
  </Router>
);

export const Primary = Template.bind({});

Primary.args = {
  books: books,
};