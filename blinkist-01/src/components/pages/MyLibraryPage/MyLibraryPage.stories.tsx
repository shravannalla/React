import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyLibrary from './MyLibraryPage';
import {BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'Pages/MyLibrary',
    component: MyLibrary
}as ComponentMeta<typeof MyLibrary>;

const Template: ComponentStory<typeof MyLibrary> = () =>(
    <Router><MyLibrary/></Router>
);

export const Primary = Template.bind({});