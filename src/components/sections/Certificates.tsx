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

import React, { useState } from "react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <>
      <Header useMotion={true} {...config.sections.certificates} />
      <div className="mt-10 flex flex-wrap gap-10 justify-center">
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
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              glareColor="#aaa6c3"
            >
              <div
                className="green-pink-gradient shadow-card w-full max-w-[250px] xs:w-[250px] rounded-[20px] p-[1px] cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-6 py-5">
                  <div className="relative h-[120px] w-full flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-center text-[20px] font-bold text-white mt-4">
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

      {/* Modal Popup */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="green-pink-gradient shadow-card p-[2px] rounded-[20px] max-w-2xl w-full relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-tertiary rounded-[18px] w-full p-8 flex flex-col items-center">
              <button
                className="absolute top-6 right-6 text-white text-2xl font-bold bg-black bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-60 transition"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-[400px] object-contain rounded-xl mb-6 shadow-card"
              />
              <h3 className="text-center text-[24px] font-bold text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-secondary text-[16px] text-center mb-1">
                Completion Date:{" "}
                <span className="font-semibold text-white">
                  {selectedCert.date}
                </span>
              </p>
              <p className="text-secondary text-[16px] text-center">
                Provider:{" "}
                <span className="font-semibold text-white">
                  {selectedCert.issuer}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
