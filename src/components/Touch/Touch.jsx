import React from "react";
import {
  FacebookOutlined,
  Instagram,
  Pinterest,
  Twitter,
  Google,
  Height,
  Delete,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@mui/material";

import "../../App.css";
import "./Touch.scss";

const Touch = () => {
  return (
    <>
      <div className=" touch ">
        <div className="touch__flex">
          <h5 className=" m-auto text-white">GET IN TOUCH</h5>
          <div className=" textz my-4 d-flex">
            <TextField
              sx={{ background: "white" }}
              hiddenLabel
              id="filled-hidden-label-small"
              placeholder="Enter your email"
              variant="filled"
              size="small"
            />
            <Button
              className=" bg-dark h100"
              size="small"
              variant={"contained"}
            >
              JOIN_US
            </Button>
          </div>
          <div className=" m-auto">
            <IconButton>
              <FacebookOutlined sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <Instagram sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <Pinterest sx={{ color: "white" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
