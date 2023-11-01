import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//IMPORT INTERNAL
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "Home",
    },
    {
      name: "Tokens",
      link: "Home",
    },
    {
      name: "Pools",
      link: "Home",
    },
  ];
  //USESTATE
  const [openModel, setopenModel] = useState(false);
  const [openTokenBox, setopenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/*//LOGO IMAGE */}
          <div className={Style.NavBar_box_left_img}>
            <Image
              src={images.InterFinance}
              alt="logo"
              width={50}
              height={50}
            ></Image>
          </div>
          {/* MENU ITEMS */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </link>
            ))}
          </div>
        </div>
        <div className={Style.NavBar_box_right}>Right</div>
      </div>
    </div>
  );
};

export default NavBar;
