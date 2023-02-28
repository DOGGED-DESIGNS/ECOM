import { Button } from "@mui/material";
import React from "react";

import "../../App.css";

import "./Category.scss";

const Category = () => {
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
    {
      cat: "new season",
      img: "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      cat: "shoes",
      img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      cat: "accessories",
      img: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="category">
      {data.map((da) => {
        return (
          <div
            className={da.cat.replace(/\s+/g, "")}
            key={da.cat.replace(/\s+/g, "")}
          >
            <img src={da.img} />
            <Button
              sx={{
                background: "white",
                color: "black",
                "&:hover": {
                  color: "white",
                  border: "1px solid white",
                },
              }}
              className="but"
              variant="outlined"
            >
              {da.cat}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
