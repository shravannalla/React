import { ComponentStory } from "@storybook/react";
import React from "react";
import DefaultButton from "./DefaultButton";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default{
    title:'atoms/DefaultButton',
    component:DefaultButton
};

const Template: ComponentStory<typeof DefaultButton> = (args) =>(
    <DefaultButton {...args} />
);


export const Primary = Template.bind({});
export const IconButton = Template.bind({});
export const EndIconButton = Template.bind({});

Primary.args = {
  size: "large",
  variant: "contained",
  label: "Button",
};

EndIconButton.args = {
  size: "large",
  variant: "outlined",
  color:"inherit",
  endIcon: <KeyboardArrowDownOutlinedIcon />,
};
IconButton.args = {
  size: "large",
  endIcon: <SearchIcon />,
};

