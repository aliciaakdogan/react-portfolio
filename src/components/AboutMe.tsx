import React from "react";
import photo10 from "./assets/photo10.png";

export default function AboutMe() {
  return (
    <div className="intro-container">
      <img className="headshot" src={photo10} alt="" width={375} />
      <div className="about-me-container">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A veritatis,
          quis necessitatibus quidem officia aut consectetur, maxime illum
          asperiores itaque atque, suscipit assumenda! Vel inventore quam
          debitis omnis esse voluptatem delectus voluptates magni accusantium?
          Tenetur atque non molestias voluptatum perferendis, vitae ab
          perspiciatis aliquid alias quis quisquam consequatur temporibus
          eligendi.
        </p>
      </div>
    </div>
  );
}
