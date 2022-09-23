import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Explore from './ExplorePage';

export default {
    title: 'Pages/Explore',
    component: Explore
}as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = () =>(
    <Explore/>
);

export const Primary = Template.bind({});