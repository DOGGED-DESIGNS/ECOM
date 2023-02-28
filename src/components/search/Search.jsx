import {
  ArrowBack,
  ArrowRight,
  Clear,
  SearchOutlined,
  TimelapseOutlined,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import "../../App.css";
import "./Search.scss";

const Search = () => {
  return (
    <>
      <div className=" searchz d-flex m-auto">
        <TextField
          className="field"
          sx={{
            borderRadius: "0px",
            "&:focus": {
              borderRadius: "0px",
            },
          }}
          label="search"
          size="small"
          variant="outlined"
        />
        <Button
          sx={{ borderRadius: "0px" }}
          variant="contained"
          color="secondary"
          size="small"
          className=" p-1 "
          startIcon={<SearchOutlined fontSize="small" />}
        >
          {" "}
          SEARCH{" "}
        </Button>
      </div>

      <List className="listz">
        <ListItem divider={true} selected="true" components={"a"}>
          <NavLink>
            <IconButton>
              <ArrowBack fontSize="small" />
            </IconButton>
          </NavLink>

          <ListItemText primary="shoes" className=" text-center">
            {" "}
          </ListItemText>

          <IconButton>
            {" "}
            <Clear fontSize="small" />{" "}
          </IconButton>
        </ListItem>
        <ListItem divider={true} components={"a"}>
          <NavLink>
            <IconButton>
              <ArrowBack fontSize="small" />
            </IconButton>
          </NavLink>

          <ListItemText primary="sport" className=" text-center">
            {" "}
          </ListItemText>

          <IconButton>
            {" "}
            <Clear fontSize="small" />{" "}
          </IconButton>
        </ListItem>
        <ListItem divider={true} components={"a"}>
          <NavLink>
            <IconButton>
              <ArrowBack fontSize="small" />
            </IconButton>
          </NavLink>

          <ListItemText primary="women" className=" text-center">
            {" "}
          </ListItemText>

          <IconButton>
            {" "}
            <Clear fontSize="small" />{" "}
          </IconButton>
        </ListItem>
      </List>
    </>
  );
};

export default Search;
