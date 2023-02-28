import {
  Add,
  Favorite,
  Maximize,
  Minimize,
  Navigation,
  Shop2Outlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { AiOutlineMinus } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import {} from "react-icons/ti";
import { Button, Fab, Typography } from "@mui/material";
import { useState } from "react";

import "../../App.css";
import "./Product.scss";
import Wish from "../../components/wish/Wish";

const Product = () => {
  const [index, setIndex] = useState(0);
  const data = [
    "https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/959751/pexels-photo-959751.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <>
      <div className="productz">
        <div className=" productz__small">
          {data.map((da, ind) => {
            return (
              <div className=" productz__small--img  m-3">
                <img
                  src={da}
                  onClick={() => {
                    setIndex(ind);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className=" productz__big m-3 ">
          <img src={data[index]} />
        </div>
        <div className=" flex-grow-1">
          <Typography
            variant="h6"
            className=" my-3 text-capitalize font-weight-bold"
          >
            {" "}
            long sleeves graphic T-shirt{" "}
          </Typography>

          <span className=" text-black-50">
            thi is just for a test and i hopei it comes out well and it is the
            reason why we have to do this in a way that we will not regret it
            latter and later in a way an this is just what
          </span>

          <div className=" d-flex  my-4">
            <Fab
              sx={{
                borderRadius: "0px",
                boxShadow: "none",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                height: "30px",
                width: "30px",
              }}
              aria-label="like"
            >
              <AiOutlineMinus fontSize={"20px"} />
            </Fab>
            <span className="mx-3 my-auto">1</span>

            <Fab
              sx={{
                borderRadius: "0px",
                height: "30px",
                width: "30px",
                boxShadow: "none",
              }}
              aria-label="like"
            >
              <Add fontSize="small" />
            </Fab>
          </div>

          <Button
            className="my-3"
            sx={{ borderRadius: "0px" }}
            variant="contained"
            size="large"
            endIcon={<ShoppingCartOutlined />}
          >
            Add to Chart
          </Button>

          <div className="my-4">
            <Button
              variant="text"
              color="primary"
              className="mx-2"
              startIcon={<Favorite />}
            >
              {" "}
              ADD TO WISH LIST{" "}
            </Button>
            <Button
              variant="text"
              className="mx-2"
              color="primary"
              startIcon={<BiGitCompare />}
            >
              {" "}
              ADD TO COMPARE{" "}
            </Button>
          </div>
          <div>
            <Typography
              variant="span"
              className=" text-capitalize my-2 d-block text-black-50"
            >
              vendor: <span> Uzoechi Jeremiah </span>
            </Typography>
            <Typography
              variant="span"
              className="text-capitalize my-2 d-block text-black-50"
            >
              product type: <span> men </span>
            </Typography>
            <Typography
              variant="span"
              className="text-capitalize my-2 d-block text-black-50"
            >
              Tag: <span> T-shirt </span>
            </Typography>

            <hr></hr>
            <Typography
              variant="span"
              className="text-capitalize my-3 d-block text-black-50"
            >
              DESCRIPTION
            </Typography>
            <Typography
              variant="span"
              className=" p-2 border-bottom border-top text-black-50"
            >
              ADDITIONAL INFORMATION
            </Typography>
            <Typography variant="span" className="my-3 d-block text-black-50">
              FAQ
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
