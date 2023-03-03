import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VStack } from "@chakra-ui/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
};

export const Variants: ComponentStory<typeof Button> = () => (
  <VStack spacing={2} maxWidth={300}>
    <Button variant="ghost" label="Ghost Button" />
    <Button variant="link" label="Link Button" />
    <Button variant="outline" label="Outline Button" />
    <Button variant="solid" label="Solid Button" />
    <Button variant="unstyled" label="Unstyled Button" />
  </VStack>
);

export const Sizes: ComponentStory<typeof Button> = () => (
  <VStack spacing={2} maxWidth={300}>
    <Button variant="solid" size="xs" label="XS" />
    <Button variant="solid" size="sm" label="SM" />
    <Button variant="solid" size="md" label="MD" />
    <Button variant="solid" size="lg" label="LG" />
  </VStack>
);
