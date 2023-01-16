import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/icon.png'
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
      <div>
        <div className="footer pt-10 bg-base-200 text-base-content mt-14">
          <div>
            <img src={icon} alt="" className="w-80 h-52" />
          </div>
          <div className="mx-auto lg:mx-0 mt-0 p-0">
            <span className="footer-title">Company</span>
            <p>
              <Link className="link link-hover">About us</Link>
            </p>
            <p>
              <Link className="link link-hover">Contact</Link>
            </p>

            <p>
              <Link className="link link-hover">Board Members</Link>
            </p>

            <p>
              <Link className="link link-hover">Press kit</Link>
            </p>
          </div>
          <div className="mx-auto lg:text-right">
            <div className="mb-4 flex items-center gap-3 mx-auto lg:mx-0">
              {" "}
              <p>
                <FaMapMarkerAlt className="text-red-600 text-lg"></FaMapMarkerAlt>
              </p>
              <p>78 Mundera Bazar Prayagraj UP India 211011</p>
            </div>
            <div className="mb-4 flex items-center gap-3 mx-auto lg:mx-0">
              <p>
                <FaRegEnvelope className="text-blue-900 text-lg"></FaRegEnvelope>
              </p>
              <p>foodboxfoundation@gmail.com</p>
            </div>
            <div className="mb-4 flex items-center gap-3 mx-auto lg:mx-0">
              <p>
                <FaPhoneAlt className="text-gray-800 text-lg"></FaPhoneAlt>
              </p>
              <p>+917617080267</p>
            </div>
          </div>
        </div>
        <footer className="pb-10 bg-base-200 text-base-content">
          <p className="text-center">
            Food Box Foundation
            <br />
            Providing Food for hunger 2022
          </p>
        </footer>
      </div>
    );
};

export default Footer;