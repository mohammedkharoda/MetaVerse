"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds, startingFeatures } from "../constants";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { ExploreCard, StartSteps, TitleText, TypingText } from "../components";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="|How Metaversus Works" />
        <TitleText title={<>Get Started with just a few click's</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((features, index) => {
            return (
              <StartSteps key={features} numbers={index} text={features} />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
