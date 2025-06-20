// import { useState } from "react";

import { data } from "./data";
import Product from "./Product";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div id="Skills" className="skills">
      <div className=" row ">
        <div className="col-10 col-lg-7 mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=""
          >
            Our team is skilled in home renovations, including customized
            projects to enhance both functionality and aesthetics.
          </motion.h1>
        </div>
        <div className="col-10 col-lg-3 mx-auto ">
          <motion.p
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className="font-bold"
          >
            Residential Houses Cottages Apartment Buildings Commercial Buildings
            Industrial Facilities
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 2 }}
        className="product-list row"
      >
        <Product />
      </motion.div>
    </div>
  );
}
