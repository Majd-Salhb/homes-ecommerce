// import { useState } from "react";

import { data } from "./data";
import Product from "./Product";

import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="skills">
      <div className="col-10 mx-auto d-flex mt-4">
        <div className="col-7">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=""
          >
            mmat assumenda vero! Adipisci, excepturi! uufas shdash skjs sajsa
          </motion.h1>
        </div>
        <div className="col-3">
          <motion.p
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=""
          >
            mmat assumenda vero! Adipisci, excepturi!
          </motion.p>
        </div>
      </div>

      <div className="product-list row">
        {data.map((product) => (
          <Product key={product.id} />
        ))}
      </div>
    </div>
  );
}
