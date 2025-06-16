import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <div className="about-section">
        <div className="p-3 view-port">
          <div className="col-10 mt-4 ">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 2 }}
              className=""
            >
              mmat assumenda vero! Adipisci, excepturi! uufas shdash skjs sajsa
            </motion.h1>
          </div>

          <div className="col-10 cards pt-5">
            <div className="col-5 col-md-4 ">
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
            <div className="col-5 col-md-3 card-2">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                mmat assumenda vero! Adipisci, excepturi!
              </motion.p>
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                mmat assumenda vero! Adipisci, excepturi!
              </motion.p>
            </div>
            <div className="col-10 col-md-3 card-3">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 2 }}
                className=""
              >
                mmat assumenda vero! Adipisci, excepturi!
              </motion.p>
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="card-img"
              ></motion.div>

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
        </div>
      </div>
    </>
  );
}
