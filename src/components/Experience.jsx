import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        {/* ✅ Make Company Name a Hyperlink */}
        <a
          href={experience.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-[16px] font-semibold"
        >
          {experience.company_name}
        </a>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Subheading */}
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>

        {/* Work Experience - Bigger on Desktop, Balanced on Mobile */}
        <h2 className="text-center text-gray-300 font-bold text-[32px] sm:text-[42px]">
          Work Experience.
        </h2>

        {/* Role Name - Smaller on Mobile, Balanced on Desktop */}
        <h3 className="text-center text-white font-extrabold tracking-wide mt-3 text-[22px] sm:text-[30px]">
          Application Support Engineer 👨‍💻
        </h3>

        {/* Experience Period */}
        <div className="flex justify-center items-center gap-2 mt-2 text-white-300 text-[16px] sm:text-[18px] font-medium">
          <FaCalendarAlt className="text-pink-400 text-[18px] sm:text-[20px]" />
          <span>Jan/2023 - Present</span>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
