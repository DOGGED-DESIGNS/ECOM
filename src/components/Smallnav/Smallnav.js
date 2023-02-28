import {
  ChildCare,
  ChildFriendly,
  Delete,
  FavoriteBorderOutlined,
  GolfCourseRounded,
  Home,
  PersonOutline,
  Search,
  ShoppingCartOutlined,
  Sports,
  UTurnLeft,
  WomanOutlined,
} from "@mui/icons-material";
import {
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import { Context } from "../../context/Generalprovider";

import "./Smallnav.scss";

const Smallnav = () => {
  const { toggle, changeToggle, setToggle, setMenu } = useContext(Context);

  const [num, setNum] = useState(null);

  return (
    <div className="smallnav bg-white">
      <Typography variant="h6" className=" text-center ">
        {" "}
        DOGGED WEB SHOP{" "}
      </Typography>
      <List className=" p-2 ">
        <ListItemButton
          onClick={() => {
            setNum(1);
          }}
          className=" my-3"
          selected={num == 1 && true}
        >
          <ListItemIcon>
            <Home fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText className=" text-left "> HomePage </ListItemText>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setNum(2);
          }}
          selected={num == 2 && true}
          className=" my-3"
        >
          <ListItemIcon>
            <ChildCare fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText className=" text-left "> children </ListItemText>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setNum(3);
          }}
          selected={num == 3 && true}
          className=" my-3"
        >
          <ListItemIcon>
            <Sports fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText className=" text-left "> Sports </ListItemText>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            setNum(4);
          }}
          selected={num == 4 && true}
          className=" my-3"
        >
          <ListItemIcon>
            <WomanOutlined fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText className=" text-left "> WomanOutlined </ListItemText>
        </ListItemButton>
      </List>

      <div className=" d-flex mt-4 align-items-center flex-wrap ">
        <div className=" mx-2">
          <IconButton aria-label="cart">
            <PersonOutline />
          </IconButton>
        </div>
        <div className=" mx-2">
          <IconButton
            onClick={() => {
              changeToggle();
              setMenu(false);
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
      </div>
    </div>
  );
};

export default Smallnav;
