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
      <footer className="flex justify-between items-center bg-[#2B2B2B] text-white p-4 h-24">
        <div className="w-1/3 flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} Pindari Coders</p>
        </div>
        <div className="space-x-4 w-1/3 flex justify-center items-center gap-2">
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
        <div className="w-1/3 flex justify-center items-center">
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
