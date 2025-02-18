import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { useState } from "react";

function ExplorerMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, earum,
        voluptatibus praesentium neque, eveniet eaque magni dolore et nemo
        tempore fugit odit odio nam sapiente. Ea repudiandae sapiente laudantium
        nulla.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="explore-menu-list-item"
              key={index}
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? "active" : ""}
              />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExplorerMenu;