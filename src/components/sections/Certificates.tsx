import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

import figmaCert from "../../assets/certificates/figma certificate.jpg";
import genaiCert from "../../assets/certificates/Gen AI Study Jams & GenAIus_page-0001.jpg";
import gfgCert from "../../assets/certificates/GFG Data Science Certificate_page-0001.jpg";
import sapFoundationCert from "../../assets/certificates/SAP Foundation Course_page-0001.jpg";
import sapLaunchpadCert from "../../assets/certificates/SAP-Launchpad to Success_page-0001.jpg";
import sqlCert from "../../assets/certificates/SQL certificate_page-0001.jpg";
import jiraCert from "../../assets/certificates/jira_page-0001.jpg";
import scrumCert from "../../assets/certificates/scrum master certification_page-0001.jpg";
import uiuxCert from "../../assets/certificates/UI-UX Desing_page-0001.jpg";
import swiggyCert from "../../assets/certificates/Swiggy data analysis in power bi.jpg";
import introDataSciCert from "../../assets/certificates/Introduction to data scientist.jpg";

const certificateList = [
  {
    title: "Figma Certificate",
    issuer: "Figma",
    date: "2025",
    image: figmaCert,
  },
  {
    title: "Gen AI Study Jams & GenAIus",
    issuer: "Google",
    date: "2025",
    image: genaiCert,
  },
  {
    title: "GFG Data Science Certificate",
    issuer: "GeeksforGeeks",
    date: "2025",
    image: gfgCert,
  },
  {
    title: "SAP Foundation Course",
    issuer: "SAP",
    date: "2025",
    image: sapFoundationCert,
  },
  {
    title: "SAP-Launchpad to Success",
    issuer: "SAP",
    date: "2025",
    image: sapLaunchpadCert,
  },
  {
    title: "SQL Certificate",
    issuer: "SoloLearn",
    date: "2025",
    image: sqlCert,
  },
  {
    title: "Jira Certificate",
    issuer: "Atlassian",
    date: "2025",
    image: jiraCert,
  },
  {
    title: "Scrum Master Certification",
    issuer: "Scrum.org",
    date: "2025",
    image: scrumCert,
  },
  {
    title: "UI/UX Design",
    issuer: "Coursera",
    date: "2025",
    image: uiuxCert,
  },
  {
    title: "Swiggy Data Analysis in Power BI",
    issuer: "Power BI",
    date: "2025",
    image: swiggyCert,
  },
  {
    title: "Introduction to Data Scientist",
    issuer: "Coursera",
    date: "2025",
    image: introDataSciCert,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 80,
    },
  }),
};

const Certificates = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.certificates} />
      <div className="mt-10 grid gap-7 justify-center sm:grid-cols-2 lg:grid-cols-3">
        {certificateList.map((cert, i) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Tilt
              glareEnable
              tiltEnable
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              glareColor="#aaa6c3"
            >
              <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[350px]">
                <div className="relative h-[230px] w-full">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-[20px] font-bold text-white text-center">
                    {cert.title}
                  </h3>
                  <p className="text-secondary mt-2 text-[14px] text-center">
                    {cert.issuer} &bull; {cert.date}
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
