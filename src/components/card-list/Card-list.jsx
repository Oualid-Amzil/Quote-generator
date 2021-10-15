import React from "react";

import Card from "../card/Card.jsx";

import classes from "./Card-list.module.css";

const CardList = (props) => {
  return (
    <div className={classes["card-list"]}>
      {" "}
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
