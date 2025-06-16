import "bootstrap";
import { motion } from "framer-motion";
import AnimatedText from "./title";

export default function Home() {
  return (
    <div className="landing d-flex">
      <div className="col-12 col-md-10 col-lg-8">
        <div className="col-12 col-md-10 col-lg-8 d-block  d-sm-flex">
          <motion.div
            className="m-2  p-3"
            initial={{ x: 48, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            mmat assumenda vero! Adipisci, excepturi!
          </motion.div>
          <motion.div
            className="m-2  p-3"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            mmat assumenda vero! Adipisci, excepturi!
          </motion.div>
        </div>

        <div className="col-8">
          <AnimatedText text="ROFFING" />
        </div>
        <div className="col-10 col-lg-6 mx-auto">
          <motion.h3
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 2 }}
            className=""
          >
            elit. Dicta, veritatis! Voluptatum, iste doloribus. Ipsum, soluta.
            Hic, molestiae velit dignissimos magnam vero at harum soluta
            cupiditate aut ex atque laudantium tenetur.
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
        ></motion.div>
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          className="img2"
        ></motion.div>
      </div>
    </div>
  );
}
