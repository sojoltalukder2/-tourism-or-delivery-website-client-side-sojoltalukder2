import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter, faYoutube,faReddit,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="bg-dark d-flex flex-column flex-lg-row mt-5 justify-content-center justify-content-lg-around ">
          {/* the first part  */}
           <div className="text-white align-center">
               <p> Contact us here</p>
               <p>0125113302</p>
               <p>tourism@gmail.com</p>
               <span>Address</span>
               <p> 2 no street , London, Uk </p>
           </div>
           {/* the second part  */}
           <div className="text-white">
              <p>Socialize with us </p>
              <p>
              <FontAwesomeIcon className="mx-2" icon={faFacebook} /> 
              <FontAwesomeIcon className="mx-2"  icon={faTwitter} /> 
              <FontAwesomeIcon className="mx-2"  icon={faYoutube} /> 
              <FontAwesomeIcon  className="mx-2" icon={faReddit} /> 
              <FontAwesomeIcon className="mx-2"  icon={faWhatsapp} /> 
              <FontAwesomeIcon  className="mx-2" icon={faInstagram} /> 
              </p>
              <p> Follow these to know our every tour</p>
           </div>
        </div>
    );
};

export default Footer;