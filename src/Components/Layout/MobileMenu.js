import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import "../../Styles/Layout.scss";

function MobileMenu(props) {
  const topVariants = {
    open: {
      strokeDasharray: "20 100",
      strokeDashoffset: -74,
    },
    closed: {
      strokeDasharray: "30 100",
      strokeDashoffset: 0,
    },
  };

  const bottomVariants = {
    open: {
      strokeDasharray: "20 100",
      strokeDashoffset: -74,
    },
    closed: {
      strokeDasharray: "30 100",
      strokeDashoffset: 0,
    },
  };

  const menuVariants = {
    open: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.1,
        },
      },
    },
    closed: {
      opacity: 0,
      transition: {
        opacity: {
          duration: 0.1,
        },
      },
    },
  };

  const menuControls = useAnimation();

  const menuButtonControls = useAnimation()

  const [isMenuOpen, toggleMenu] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      menuControls.start("open");
      menuButtonControls.start("open")
    }
    if (!isMenuOpen){
      menuButtonControls.start("closed")
    }
  });

  return (
    <div className="mobile-menu-container">
      <button
        className="menu-button"
        onClick={() => {
          toggleMenu(!isMenuOpen);
        }}
      >
        <svg width="5em" height="5em" viewBox="-5 -10 60 60">
          <motion.path
            fill="transparent"
            d="M10 15 L40 15 A10 10 0 0 1 40 35 L37 35 L15 10"
            strokeLinejoin="round"
            stroke="#fff"
            strokeWidth={3}
            variants={topVariants}
            animate={menuButtonControls}
            initial="closed"
            transition={{
              duration: 0.6,
              type: "spring",
            }}
          />
          <motion.path
            d="M10 25 L40 25 A5 5 0 0 0 40 5 L37 5 L15 30"
            strokeLinejoin="round"
            fill="transparent"
            stroke="#fff"
            strokeWidth={3}
            variants={bottomVariants}
            animate={menuButtonControls}
            initial="closed"
            transition={{
              duration: 0.6,
              type: "spring",
            }}
          />
        </svg>
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="mobile-menu-wrapper"
            variants={menuVariants}
            animate={menuControls}
            initial="closed"
            exit="closed"
            key="nav"
          >
            {props.menu}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
