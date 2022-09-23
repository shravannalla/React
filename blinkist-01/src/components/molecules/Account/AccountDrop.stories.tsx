import React from 'react';
import AccountDrop from './AccountDrop';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Molecules/AccountDropDown',
    component: AccountDrop
}as ComponentMeta<typeof AccountDrop>;

const Template: ComponentStory<typeof AccountDrop> = (args) =>(
    <AccountDrop/>
);

export const Primary = Template.bind({});