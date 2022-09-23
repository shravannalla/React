import React from 'react';
import BookCard from './BookCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

export default {
    title: 'Molecules/BookCard',
    component: BookCard
}as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) =>(
    <Router><BookCard {...args}/></Router>
);

export const Primary = Template.bind({});

Primary.args = {
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    category:"Entrepreneurship",
    image: "/images/coverimages/2.png",
    duration: 13,
    reads: "1.9k reads",
    isInMyLibrary: true,
    isFinished: false
  };

export const Secondary = Template.bind({});

  Secondary.args = {
    title: "Doesn’t Hurt to Ask",
    author: "Trey Gowdy",
    category:"Entrepreneurship",
    image: "/images/coverimages/3.png",
    duration: 13,
    reads: "1.9k reads",
    isInMyLibrary: true,
    isFinished: true
  };