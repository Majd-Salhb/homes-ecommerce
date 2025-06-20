import "bootstrap";
import { motion } from "framer-motion";
import AnimatedText from "./title";

export default function Home() {
  return (
    <div className="landing row">
      <div className="col-10  col-lg-8">
        <div className="col-10  col-lg-8 d-block  d-sm-flex">
          <motion.div
            className="m-4 company-data "
            initial={{ x: 48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            <span>Texas Elite</span> Roofing and Construction
          </motion.div>
          <motion.div
            className="m-4 company-data "
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            Roof <span>Inspections</span> and <span>Repair</span>
          </motion.div>
        </div>

        <div className="col-10">
          <AnimatedText />
        </div>
        <div className="col-10  p-4 ">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=""
          >
            Texas Elite Roofing is a general contractor specializing in roof
            repair and replacement, using top of the line installation crews.
          </motion.h3>
          <motion.button
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{ originX: 0.5 }}
            className=" start-btn"
          >
            GET STARTED
          </motion.button>
        </div>
      </div>

      <div className="col-4 d-none d-lg-flex imgs">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="img1"
        >
          <img src="img/26.jpg" alt="" loading="lazy" />
        </motion.div>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="img2"
        >
          <img src="img/22.jpg" alt="" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
}
