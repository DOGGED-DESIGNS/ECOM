import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import { useState } from "react";

import "../../App.css";
import Card from "../../components/Card/Card";
import "./Categorypage.scss";
const Cat = () => {
  const [price, setPrice] = useState(null);

  return (
    <div className="product">
      <div className=" product__side">
        <Typography
          variant="h6"
          className=" my-3 font-weight-bold d-block text-capitalize"
        >
          product categories
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Accessories"
          />
          <FormControlLabel control={<Checkbox />} label="shoes" />
          <FormControlLabel control={<Checkbox />} label="women" />
          <FormControlLabel control={<Checkbox />} label="men" />
          <FormControlLabel control={<Checkbox />} label="sports" />
        </FormGroup>
        <Typography
          variant="h6"
          className="  text-black-50 my-3 text-capitalize"
        >
          filter by price
        </Typography>
        <div className=" d-flex">
          <span>0</span>

          <Slider
            onChange={(e) => {
              // e.currentTarget.value
              setPrice(e.target.value);
            }}
            className=" my-3"
            // defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
          <span>{price}</span>
        </div>{" "}
        <div>
          <Typography
            variant="h6"
            className="text-black-50 my-3 text-capitalize"
          >
            sort by
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className=" product__main flex-grow-1">
        <div className=" product__main--img">
          <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>

        <Card />
      </div>
    </div>
  );
};

export default Cat;
