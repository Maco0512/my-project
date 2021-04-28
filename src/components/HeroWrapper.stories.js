import React from "react";
import { action } from "@storybook/addon-actions";
import HeroWrapper from "./HeroWrapper";

export default {
  component: HeroWrapper,
  title: "HeroWrapper",
};

export const DefaultDescription = () => (
  <HeroWrapper
    onClick={action("clicked")}
    title="HeroWrapper with default description"
  />
);

export const WithDescription = () => (
  <HeroWrapper
    onClick={action("clicked")}
    title="Jumbotron Wrapper with description"
    description="A custom description is a description written by a player to describe their own character, an indoors location or an item. Custom descriptions for characters were the first of these to get implemented"
  />
);

export const WithChildren = () => (
  <HeroWrapper
    onClick={action("clicked")}
    title="Jumbotron Wrapper with description"
    description="A custom description is a description written by a player to describe their own character, an indoors location or an item. Custom descriptions for characters were the first of these to get implemented"
  >
    <h1>Child 1</h1>
    <h2>Child 2</h2>
    <h3>Child 3</h3>
    <h4>Child 4</h4>
  </HeroWrapper>
);
