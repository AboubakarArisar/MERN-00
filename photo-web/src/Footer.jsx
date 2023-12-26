import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import axios from "axios";
const Footer = () => {
  console.log("Footer rendered");
  const [data, setData] = useState({});
  const [len, setLen] = useState(0);
  useEffect(() => {
    console.log("useEffect triggered. len:", len);
    if (len === 0) {
      const fetchData = async () => {
        const category = "success";
        const apiKey = "dmrRFA06Cd/ZREjXA1Kmdg==F8faVFCD7u7bSBmE";
        try {
          const response = await axios.get(
            `https://api.api-ninjas.com/v1/quotes?category=${category}`,
            {
              headers: { "X-Api-Key": apiKey },
            }
          );
          console.log(response.data);
          setData(response.data);

          setLen((prev) => prev + 1);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      fetchData();
    }
  }, []);

  return (
    <>
      <hr className="opacity-10" />
      <footer className="flex lg:flex-row mg:flex-row xsm:flex-col  md:justify-between xsm:justify-center xsm:gap-6 md:gap-2 items-center bg-[#2B2B2B] text-white p-4 md:h-24">
        <div className="w-1/3 flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Pindari Coders</p>
        </div>
        <div className="md:space-x-4 md:w-1/3 xsm:w-full flex justify-center items-center xsm:gap-12 md:gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="lg:w-1/3 xsm:w-full xsm:px-10  flex justify-center items-center">
          <p>
            {data && data.length > 0
              ? `${data[0].quote} -  ${data[0].author}`
              : "Loading quote..."}
          </p>
          {console.log(data.quote)}
        </div>
      </footer>
    </>
  );
};

export default Footer;
