import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex items-center justify-evenly flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I love turning ideas into pixels! I'm a MERN stack developer with a
        passion for building intuitive and impactful web experiences. I thrive
        in collaborative environments where I can learn from seasoned
        professionals and contribute my fresh perspective. I'm Passionate about
        leveraging cutting-edge technologies to deliver scalable and efficient
        solutions. I'm eager to find a role where I can make a real difference
        and keep my code as clean as my coffee.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            index={i}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
