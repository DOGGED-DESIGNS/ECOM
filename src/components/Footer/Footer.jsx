import React from "react";

import "../../App.css";
import "./Footer.scss";
import Image from "../../constant/index";

const Footer = () => {
  return (
    <>
      <div className="footer container ">
        <div className="footer__grid1">
          <div className=" p-3">
            <h6 className="  font-weight-bold">Company</h6>
            <span className=" d-block my-2 text-black-50 ">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
          </div>
          <div className="p-3">
            {" "}
            <h6 className="  font-weight-bold">Company</h6>
            <span className=" d-block my-2 text-black-50 ">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
            <span className=" d-block my-2 text-black-50">hourse</span>
          </div>
          <div className="p-3">
            <h6 className="  font-weight-bold">About</h6>
            <span className=" d-block text-black-50 ">
              this is just for tes and i just want to slho that hti is working
              properly since lorem ipsum is not wroking lekt mek just see and
              fine dout twhati is wrowrj{" "}
            </span>
          </div>
          <div className="p-3">
            <h6 className="  font-weight-bold">Contact</h6>
            <span className=" d-block text-black-50 ">
              this is just for tes and i just want to slho that hti is working
              properly since lorem ipsum is not wroking lekt mek just see and
              fine dout twhati is wrowrj{" "}
            </span>
          </div>
        </div>
        <div className=" footer__grid2">
          <div>one</div>
          <div className=" footer__grid2--img">
            <img alt=" not show" src={Image.Pay} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
