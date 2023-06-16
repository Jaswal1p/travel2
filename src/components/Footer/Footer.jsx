import React, {useEffect} from 'react';
// import ReactPlayer from 'react-player';
import './footer.css';
import video2 from '../../Assets/Vid-2.mp4';
import {FiSend} from 'react-icons/fi/';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

import Aos from 'aos';
import 'aos/dist/aos.css';

// import img1 from '../../Assets/1.jpg';

const Footer = () => {
  // lets create a react hook to add a scroll
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  
  return (

    <section className='footer'>
      <div className="videoDiv">
         <video src={video2} muted autoPlay loop type='video/mp4'/>
      </div>

      {/* <div className="imageDiv">
         <img src={img1} className='img' alt='' />
      </div> */}

      

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small className='small' >KEEP IN TOUCH</small>
            <h2 className='h2' >Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" className='input' type="text" placeholder='Enter your email address'/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
               SEND <FiSend className="icon"/>
            </button>

          </div>
         
        </div>

        <div className="footerCard flex">

          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#section" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, odit commodi non sequi eum voluptates praesentium accusamus dolores quis vero iste, eligendi nostrum deleniti reprehenderit.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
              {/* Group #1 */}
              <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>

              </div>

              {/* Group #2 */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Car Rental
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  AirBnb
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>

              </div>

              {/* Group #3 */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Carribean
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Flights
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Business Travel
                </li>

              </div>

          </div>

          <div className="footerDiv flex">
             <small className='small' >BEST TRAVEL WEBSITE THEME</small>
             <small className='small' >COPYRIGHTS RESERVED - Bobby Jaswal2023</small>

          </div>

        </div>
      </div>
    </section>

    
  )
}

export default Footer