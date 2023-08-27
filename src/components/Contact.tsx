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
        className='flex-[0.75] bg-black-100 p-16 rounded-2xl xs:p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="flex sm:flex-row sm:justify-center xs:flex-col">
          <img className="xl:w-80 xl:h-80 sm:w-60 sm:h-60 xs:my-4 xs:w-full rounded-full object-cover object-center" src={profile} alt="Rounded avatar" />
          <div className="flex flex-col justify-center gap-6 xl:mx-20 xl:w-1/3 sm:w-3/5 sm:mx-8 xs:w-full xs:px-0">
            <a href="https://www.linkedin.com/in/bose-pramuanpornsatid/">
              <img class="xs:w-full" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Linkedin" />
            </a>
            <a href="https://github.com/bose-pramuanpornsatid">
              <img class="xs:w-full" src="https://img.shields.io/badge/GitHub-001724?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.3, 1)}
        className='xl:flex xl:h-[600px] md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");