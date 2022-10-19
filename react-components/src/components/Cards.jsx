import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    name: "Card 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum expedita consequuntur.",
  },
  {
    id: 2,
    name: "Card 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum expedita consequuntur.",
  },
  {
    id: 3,
    name: "Card 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum expedita consequuntur.",
  },
  {
    id: 4,
    name: "Card 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum expedita consequuntur.",
  },
  {
    id: 5,
    name: "Card 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum expedita consequuntur.",
  },
];

const Cards = () => {
  return (
    <div>
      {/* Below method is to only render one card */}
      <Card name="shivam" desc="desc?" />
      {/* This is used to map the cards array and generate as many components as required based on the length of the cards array */}
      {cards.map((card) => (
        // Here the entire card object is passed as a prop
        // so that the Card component has access to the data
        <Card name={card.name} desc={card.desc} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
