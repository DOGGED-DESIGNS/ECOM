import React from "react";

import "./Card.scss";

import "../../App.css";
import { Chip, Slider } from "@mui/material";

const Card = ({ title, write }) => {
  return (
    <div>
      <div className=" cardz container">
        <div className="cardz__grid1">
          <div>
            {" "}
            <h4 className=" font-weight-bold text-capitalize"> {title}</h4>{" "}
          </div>
          <div className=" text-black-50"> {write}</div>
        </div>

        <div className=" cardz__grid2 container">
          <div>
            <div className="cardz__grid2--img">
              <img src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <img src="https://images.pexels.com/photos/959751/pexels-photo-959751.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Chip
                size="small"
                sx={{
                  borderRadius: "0px",
                  background: "white",
                }}
                className="chip"
                label="new season"
                variant="filled"
              />
            </div>
            <h6 className=" my-1 text-capitalize">sleeves </h6>
            <div className=" my-2">
              <span
                className=" text-black-50"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                $90{" "}
              </span>
              <span className=" mx-2 font-weight-bold"> $19</span>
            </div>
          </div>
          <div>
            <div className="cardz__grid2--img">
              <img src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <img src="https://images.pexels.com/photos/959751/pexels-photo-959751.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Chip
                size="small"
                sx={{
                  borderRadius: "0px",
                  background: "white",
                }}
                className="chip"
                label="new season"
                variant="filled"
              />
            </div>
            <h6 className=" my-1 text-capitalize">sleeves </h6>
            <div className=" my-2">
              <span
                className=" text-black-50"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                $90{" "}
              </span>
              <span className=" mx-2 font-weight-bold"> $19</span>
            </div>
          </div>
          <div>
            <div className="cardz__grid2--img">
              <img src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <img src="https://images.pexels.com/photos/959751/pexels-photo-959751.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Chip
                size="small"
                sx={{
                  borderRadius: "0px",
                  background: "white",
                }}
                className="chip"
                label="new season"
                variant="filled"
              />
            </div>
            <h6 className=" my-1 text-capitalize">sleeves </h6>
            <div className=" my-2">
              <span
                className=" text-black-50"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                $90{" "}
              </span>
              <span className=" mx-2 font-weight-bold"> $19</span>
            </div>
          </div>
          <div>
            <div className="cardz__grid2--img">
              <img src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <img src="https://images.pexels.com/photos/959751/pexels-photo-959751.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <Chip
                size="small"
                sx={{
                  borderRadius: "0px",
                  background: "white",
                }}
                className="chip"
                label="new season"
                variant="filled"
              />
            </div>
            <h6 className=" my-1 text-capitalize">sleeves </h6>
            <div className=" my-2">
              <span
                className=" text-black-50"
                style={{ textDecoration: "line-through" }}
              >
                {" "}
                $90{" "}
              </span>
              <span className=" mx-2 font-weight-bold"> $19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
