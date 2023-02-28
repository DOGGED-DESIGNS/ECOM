import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

import {
  FavoriteBorderOutlined,
  Person2,
  KeyboardArrowDown,
  ShoppingCartOutlined,
  PersonOutline,
  SearchOutlined,
} from "@mui/icons-material";

import "./Navbar.scss";
import { Badge, Button, IconButton } from "@mui/material";
import Image from "../../constant";
import { Context } from "../../context/Generalprovider";
import Wish from "../wish/Wish";
import Search from "../search/Search";
import Nav2 from "../nav2/Nav2";

const Navbar = () => {
  const { toggle, changeToggle, search, changeSearch, setSearch, setToggle } =
    useContext(Context);

  return (
    <>
      {toggle && <Wish />}

      <nav className=" fixed-top navz bg-white" style={{ zIndex: "2000" }}>
        <div className=" p-3   container d-flex align-items-center justify-content-between ">
          <div>
            <div className=" d-flex">
              <div className=" mx-2">
                <Link className=" text-capitalize text-black-50 text-decoration-none">
                  <img src={Image.Usd} />
                </Link>
                <KeyboardArrowDown />
              </div>
              <div className=" mx-2">
                <Link className=" text-capitalize text-black-50 text-decoration-none">
                  USD
                </Link>
                <KeyboardArrowDown />
              </div>
              <div className=" hov mx-2">
                <Link className=" text-capitalize text-black-50 text-decoration-none">
                  Children
                </Link>
              </div>
              <div className=" hov mx-2">
                <Link className=" text-capitalize text-black-50 text-decoration-none">
                  Women
                </Link>
              </div>
              <div className=" hov mx-2">
                <Link className=" text-capitalize text-black-50 text-decoration-none">
                  Accessories
                </Link>
              </div>
            </div>
          </div>
          <h4 className=" font-weight-bold">DOGGED STORE</h4>
          <div className=" d-flex align-items-center ">
            <div className=" hov mx-2">
              <Link className=" text-capitalize text-black-50 text-decoration-none">
                HomePage
              </Link>
            </div>
            <div className=" hov mx-2">
              <Link className=" text-capitalize text-black-50 text-decoration-none">
                About
              </Link>
            </div>
            <div className=" mx-2">
              <IconButton aria-label="cart">
                <PersonOutline />
              </IconButton>
            </div>
            <div className=" mx-2">
              <IconButton
                onClick={() => {
                  changeToggle();
                  setSearch(false);
                }}
                aria-label="cart"
              >
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </div>
            <div className=" mx-2">
              <IconButton aria-label="cart">
                <FavoriteBorderOutlined />
              </IconButton>
            </div>
            <div className=" mx-2">
              <IconButton
                onClick={() => {
                  changeSearch();
                  setToggle(false);
                }}
                aria-label="cart"
              >
                <SearchOutlined />
              </IconButton>
            </div>
          </div>
        </div>

        {search && (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              paddingBottom: "5px",
            }}
          >
            <Search />
          </div>
        )}
      </nav>
      <div className="smallnav">
        <Nav2 />
      </div>
    </>
  );
};

export default Navbar;
