import { Delete, DeleteOutline } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { IconBase } from "react-icons/lib";
import "../../App.css";
import "./Wish.scss";

const Wish = () => {
  const data = [
    {
      cat: "male",
      img: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      cat: "women",
      img: "https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      cat: "sport",
      img: "https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="wish p-3">
      <Typography variant="h6" className=" text-capitalize text-black-50">
        products in your chart
      </Typography>
      <div className="wish__over">
        {data.map((da) => {
          return (
            <div className="  d-flex my-5  " style={{ gap: "10px" }}>
              <div className=" wish__img">
                <img src={da.img} />
              </div>
              <div className="   d-flex flex-grow-1">
                <div className="d-flex flex-column flex-grow-1">
                  <Typography
                    variant="span"
                    className=" flex-grow-1 font-weight-bold  text-capitalize text-black-50"
                  >
                    long sleeves
                  </Typography>
                  <div className=" mt-auto">
                    <Typography
                      variant="span"
                      className=" d-block mt-auto text-capitalize text-black-50"
                    >
                      longsleeves
                    </Typography>
                    <Typography
                      variant="small"
                      className=" text-primary  text-capitalize "
                    >
                      <small>1 x $233</small>
                    </Typography>
                  </div>
                </div>

                <div className=" my-auto">
                  <IconButton>
                    <DeleteOutline sx={{ color: "red" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" d-flex my-2">
        <Typography
          variant="h6"
          className=" flex-grow-1 font-weight-bold textup"
        >
          SUBTOTAL
        </Typography>
        <Typography variant="h6" className=" font-weight-bold textup">
          $500
        </Typography>
      </div>

      <Button variant="contained" size="small" className=" d-block my-3">
        PROCEED TO CHECKOUT
      </Button>

      <Button
        variant="text"
        sx={{ color: "red" }}
        size="small"
        className="my-2"
      >
        empty chart
      </Button>
    </div>
  );
};

export default Wish;
