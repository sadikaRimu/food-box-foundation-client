import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/icon.png'

const Footer = () => {
    return (
      <footer className="footer p-10 bg-base-200 text-base-content mt-14">
        <div>
          <img src={icon} alt="" className="w-64 h-52" />
          <p className="text-center">
            Food Box Foundation
            <br />
            Providing Food for hunger 2022
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
    );
};

export default Footer;