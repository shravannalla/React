import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ExpoloreDialog from "./ExploreDialog";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms/ExpoloreDialog",
  component: ExpoloreDialog,
} as ComponentMeta<typeof ExpoloreDialog>;

const Template: ComponentStory<typeof ExpoloreDialog> = () => (
  <Router>
    <ExpoloreDialog />
  </Router>
);

export const Primary = Template.bind({});
