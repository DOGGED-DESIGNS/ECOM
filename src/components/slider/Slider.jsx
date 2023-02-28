import { useEffect, useState } from "react";

import { Button } from "@mui/material";

import {
  ForkRightOutlined,
  WestOutlined,
  EastOutlined,
  ForkLeftOutlined,
} from "@mui/icons-material";

import "../../App.css";

import "./Slider.scss";
import Footer from "../Footer/Footer";
const Slider = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3527572/pexels-photo-3527572.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3756030/pexels-photo-3756030.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/3921086/pexels-photo-3921086.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      img: "https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [people, setPeople] = useState(data);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className=" slider">
        {people.map((person, personIndex) => {
          const { img } = person;
          var position = "nextslide";

          if (personIndex === index) {
            position = "activeslide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastslide";
          }
          return (
            <div className={`slider__img ${position}`}>
              <img src={img} />
            </div>
          );
        })}

        <div className=" slider__btn">
          <Button
            sx={{ color: "white", border: "1px solid white" }}
            className=" mx-1"
            onClick={() => {
              setIndex(index - 1);
            }}
            variant="outlined"
          >
            {" "}
            <WestOutlined />{" "}
          </Button>
          <Button
            sx={{ color: "white", border: "1px solid white" }}
            className=" mx-1"
            onClick={() => {
              setIndex(index + 1);
            }}
            variant="outlined"
          >
            {" "}
            <EastOutlined />{" "}
          </Button>
        </div>
        <div className="slider__cover" />
      </div>
    </>
  );
};

export default Slider;
