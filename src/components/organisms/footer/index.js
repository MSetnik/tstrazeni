import React from "react";
import "./index.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://www.facebook.com/tstrazeni6/?ref=page_internal" target='_blank' rel="noreferrer">
              <RiFacebookFill color="white" className="" />
            </a>

            <a href="https://www.instagram.com/tamburaski_sastav_trazeni/" target='_blank' rel="noreferrer">
              <AiOutlineInstagram color="white" />
            </a>

          </div>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#about">Početna</a></li>
            <li className="list-inline-item"><a href="#price-list">O nama</a></li>
            <li className="list-inline-item"><a href="#bmi-calculator">Rezerviraj</a></li>
            <li className="list-inline-item"><a href="#contact">Kontakt</a></li>
            {/* <li className="list-inline-item"><a href="https://www.privacypolicygenerator.info/live.php?token=NVADWd5RB6SoG3i7KHKU9aEB7dWkvsQB">Pravila privatnosti</a></li> */}
          </ul>
          <p className="copyright">TS Trazeni © 2022</p>
        </footer>
      </div>
      <div className="developer-container">
        <div className="developer-info-div">
          <a href="https://matkosetnik.com">
                Developed & designed by Matko Setnik
          </a>
        </div>
      </div>
    </div>

  );
};

export default Footer;