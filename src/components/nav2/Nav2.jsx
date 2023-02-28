import { Menu, SearchOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useContext } from "react";

import "../../App.css";
import { Context } from "../../context/Generalprovider";
import Search from "../search/Search";
import Smallnav from "../Smallnav/Smallnav";

const Nav2 = () => {
  const {
    toggle,
    setMenu,
    menu,
    changeToggle,
    search,
    changeSearch,
    setSearch,
    setToggle,
  } = useContext(Context);
  return (
    <>
      {menu && <Smallnav />}

      {}

      <nav className=" bg-white p-3 fixed-top">
        <div className="  d-flex  align-items-center">
          <Typography variant="span" className=" font-weight-bold mr-auto">
            {" "}
            DOGGED WEB SHOP{" "}
          </Typography>
          <div className=" d-flex  ml-auto">
            <IconButton
              onClick={() => {
                changeSearch();
                setToggle(false);

                setMenu(false);
              }}
            >
              <SearchOutlined />
            </IconButton>
            <IconButton
              onClick={() => {
                setMenu(!menu);
                setSearch(false);
                setToggle(false);
              }}
            >
              <Menu />
            </IconButton>
          </div>
        </div>

        {search && (
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <Search />
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav2;
