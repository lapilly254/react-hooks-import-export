import React from "react";
import { image } from "../data/user";
export default function About() {
  return (
    <div id="about">
      <image />
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
