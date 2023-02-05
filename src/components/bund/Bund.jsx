import React, {Component} from "react";
import { FiPhone } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import './bund.css';

const Bund = () => {
  return (
    <div className="Bund">
      <h1>Kontaktoplysninger:</h1>
      <div>
        <section>
          <button
            type="button"
            onClick={() => window.open('tel:'+document.getElementById("tel").innerHTML, "_parent")}
            style={{
              backgroundColor: "#40c55c",
              border: "0",
              borderRadius: "15px",
              width: "80px",
              height: "80px"
            }}>
            <FiPhone size="70" color="white"/>
          </button>
          <h3>Telefon</h3>
          <h2 id="tel">50 44 18 25</h2> 
        </section>
        <section>
          <button
            type="button"
            onClick={() => window.open("https://facebook.com/"+"lise.b.hoeg")}
            style={{
              color: "white",
              backgroundColor: "#6290BC",
              border: "0",
              borderRadius: "15px",
              width: "80px",
              height: "80px"
            }}
          >
            <FaFacebookF size="70"/>
          </button>
          <h3>Facebook</h3>
          <h2 id="fb">Lise Høg</h2>
        </section>
        <section>
          <button
            type="button"
            onClick={() => window.open('mailto:'+document.getElementById("email").innerHTML)}
            style={{
              backgroundColor: "#00BFFF",
              border: "0",
              borderRadius: "15px",
              width: "80px",
              height: "80px"
            }}
          >
            <HiOutlineMail size="70" color="white"/>
          </button>
          <h3>E-Mail</h3>
          <h2 id="email">lise.b.hoeg@gmail.com</h2>
        </section>
      </div>
    </div>
  );
}

export default Bund;