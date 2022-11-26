'use client';

import styles from '../styles/index';
import {motion} from "framer-motion";
import {navVariants} from "../utils/motion";

const Navbar = () => (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        navbar
    </motion.nav>
);

export default Navbar;
