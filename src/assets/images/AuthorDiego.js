import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 0,
    scale: 0,
    transition: {
      delay: 3.4,
      duration: 0.3,
    },
  },
};

const svg = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 0.5,
    transition: {
      when: "afterChildren",
      duration: 0.1,
      delay: 3,
      staggerChildren: 0.2,
    },
  },
};

const path = (strokeDashoffset) => ({
  hidden: { strokeDashoffset },
  visible: {
    strokeDashoffset: 0,
  },
});

const rectProps = {
  variants: path(866),
  transition: {
    duration: 1.5,
  },
};

const AuthorDiego = (props) => {
  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 378.9 110.9"
          variants={svg}
          initial="hidden"
          animate="visible"
          {...props}
        >
          <g
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeDasharray={200}
          >
            <text x="60" y="75" font-size="50">
              DIEGO RIOS
            </text>
          </g>
          <motion.path
            {...rectProps}
            strokeWidth={2}
            fill="none"
            stroke="#FFF"
            strokeMiterlimit={10}
            d="M12.7 14.8h349.7v83.3H12.7z"
            strokeDasharray={866}
            strokeDashoffset={866}
          />
        </motion.svg>
      </motion.div>
    </>
  );
};

export default AuthorDiego;
