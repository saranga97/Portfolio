"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Software Engineering Undergraduate in the Department of
        Electrical and Information Engineering at the{" "}
        <span className=" font-bold">
          Faculty of Engineering, University of Ruhuna.
        </span>{" "}
        I am passionate about {" "}
        <span className="italic">Coding</span> and am a {" "}
        <span className="italic">self-taught learner</span> who eagerly
        seeks opportunities to enhance {" "}
        <span className="italic">my personal skills.</span>
      </p>
      <p className="mb-3">
        With a solid foundation in{" "}
        <span className="font-medium from-orange-400">
          Java-SpringBoot, MERN stack, Angular, SQL , MongoDB
        </span>
        , and a keen interest in developing Full-Stack applications, I focus on
        creating responsive and user-friendly Solutions. My experience also
        extends to designing <span className="font-medium">RESTful APIs</span>{" "}
        and understanding the basics of{" "}
        <span className="underline">web architecture</span> and{" "}
        <span className="underline">security principles</span>, ensuring a
        comprehensive approach to Web Development.
      </p>
      <p>
        As a junior developer, I&apos;m eager to apply my skills in a{" "}
        <span className="italic">dynamic environment</span>, continuously{" "}
        <span className="font-medium">grow</span> through new challenges, and
        contribute to meaningful projects. My{" "}
        <span className="font-medium">goal</span> is to not just develop
        applications, but to craft experiences that{" "}
        <span className="underline">make a positive impact</span>.
      </p>
    </motion.section>
  );
}
