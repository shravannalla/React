import React from 'react';
import SearchInput from './SearchInput';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'SearchInput/SearchInput',
    component: SearchInput
}as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) =>(
    <SearchInput {...args}/>
);

export const Primary = Template.bind({});