import React from "react";
import headshot from "./assets/headshot.jpg";
import "./App.scss";

export default function App() {
  return (
    <div className="intro-container">
      <img className="headshot" src={headshot} alt="" width={250} />
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

      <div className="kompetenser">
        <div className="frontend">
          <h1>Frontend</h1>
          <p>React</p>
          <p>Next</p>
          <p>Redux</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>SASS</p>
          <p>Tailwind</p>
          <p>CSS</p>
          <p>HTML</p>
        </div>
        <div className="backend">
          <h1>Backend</h1>
          <p>Node.js</p>
          <p>MongoDB</p>
          <p>Express</p>
        </div>
      </div>
    </div>
  );
}
