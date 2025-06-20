import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <div id="About" className="about-section">
        <div className="p-3 view-port">
          <div className="col-10 mt-4 ">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className=""
            >
              COMPLETE ROOFING AND HOME RESTORATION SERVICES
            </motion.h1>
          </div>

          <div className="row cards pt-5">
            <div className="col-4 col-lg-4 ">
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="card-1"
              ></motion.div>
            </div>
            <div className="col-6 col-lg-3 card-2">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                Metal Roof Installation, Stone Coated Steel Roofing, and New
                Roof
              </motion.p>
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                In Burleson, Fort Worth, Arlington, Cleburne, Keene, TX, and the
                Surrounding Areas
              </motion.p>
            </div>
            <div className="col-10 col-lg-3 card-3">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                Texas Elite Roofing provides quality Home Restoration services
                including: repairing floors, painting rooms, siding, soffits,
                window services, and kitchen repairs. We are able to provide
                excellent service and high quality craftsmanship.
              </motion.p>
              <motion.div
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="card-img d-none d-lg-block"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
