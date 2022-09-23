import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookDetails from './BookDetails';

export default {
    title: 'Pages/BookInfo',
    component: BookDetails
}as ComponentMeta<typeof BookDetails>;

const Template: ComponentStory<typeof BookDetails> = () =>(
    <BookDetails/>
);

export const Primary = Template.bind({});