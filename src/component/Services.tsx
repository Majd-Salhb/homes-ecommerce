import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="col-10 d-flex justify-content-between p-5">
          <div className="col-4">
            <motion.p
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className=""
            >
              mmat assumenda vero! Adipisci, excepturi!
            </motion.p>
          </div>
          <div className="col-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className=""
            >
              mmat assumenda vero! Adipisci, excepturi! uufas shdash skjs sajsa
            </motion.h1>
          </div>
        </div>
        <ImageSlider />
      </div>
    </>
  );
}
