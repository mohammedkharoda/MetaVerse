"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} flex mx-auto flex-col`}
    >
      <TypingText title="|People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track Friends Around and Invite them to play together in the same
            world
          </>
        }
        textStyles="text-center"
      />
      {/* motion-div */}
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h0 [550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        {/* ---- guy-1 ---- */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        {/* ---- guy-2 ----  */}
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full h-full" />
        </div>
        {/* ---- guy-3 ---- */}
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* ---- guy-4 ---- */}
        <div className="absolute top-2/4 left-[20%] w-[190px] h-auto p-[6px] rounded-[15px] bg-[#5d6680]">
          <img src="mask-group.png" alt="people" className="w-full h-full" />
          <h1 className="absolute left-[25%] bottom-[3rem] text-white">
            + 264 has joined
          </h1>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
