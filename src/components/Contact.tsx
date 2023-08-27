// @ts-nocheck
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { profile } from "../assets";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };


  return (
    <div
      className={`xl:mt-4 flex flex-col-reverse gap-2 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-16 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="flex flex-row justify-center">
          <img className="xl:w-60 xl:h-60 sm:w-40 sm:h-40 xs:w-24 xs:h-24 rounded-full" src={profile} alt="Rounded avatar"/>
          <div className="flex flex-col pl-8 justify-center gap-4">
            <a href="https://www.linkedin.com/in/bose-pramuanpornsatid/">
              <img class="w-80" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin"/>
            </a>
            <a href="https://github.com/bose-pramuanpornsatid">
              <img class="w-80" src="https://img.shields.io/badge/GitHub-001724?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.3, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");