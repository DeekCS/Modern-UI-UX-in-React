import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" id="footer">
            <div className="gpt3__footer-heading">
            <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
            <p>Request Early Access </p>
{/*                 <button className=""> </button> */}
            </div>
            <div className="gpt3__footer-links">
             <div className="gpt3__footer-links_logo">
                  <img src={gpt3Logo} alt="logo" />
                  <p> Irbid , St Rihaba, All Rights Reserved</p>
             </div>
             <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Contact</p>
                <p> Counters </p>
             </div>
             <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
                </div>
                 <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Irbid , St Rihaba</p>
                    <p>077777777</p>
                    <p>abdulkareem_aldeek@outlook.com</p>
                 </div>

             </div>
              <div className="gpt3__footer-copyright">
                 <p>Copyright © 2021 GPT3. All rights reserved.
                  <br/> <br/>
                  Made With ❤ By Abdulkareem Aldeek </p>
                </div>
        </div>
    )
}

export default Footer;
