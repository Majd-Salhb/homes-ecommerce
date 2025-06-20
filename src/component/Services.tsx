import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

export default function Services() {
  return (
    <>
      <div id="Services" className="services">
        <div className=" row p-2 mt-5">
          <div className="col-10 col-lg-4">
            <motion.p
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className="font-bold"
            >
              - Metal Roofing
              <br />- Shingle Roof Installation <br />
              - Roof Inspection <br />
              - Roof Repairs Hailstorm
              <br />
              -Damage Repairs
              <br />- Complete Home Renovations
            </motion.p>
          </div>
          <div className="col-10 col-lg-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className=""
            >
              Roofing Services: Roof Repair,Roofing Contractor and Roof
              Restoration
            </motion.h1>
          </div>
        </div>
        <ImageSlider />
      </div>
    </>
  );
}
