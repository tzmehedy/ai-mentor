import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-black p-10 text-white mt-20">
        <nav className="space-y-3">
          <h1 className="text-[#00FCDB] text-4xl">
            Ai<span className="text-white">Mentor</span>
          </h1>
          <p>Copyright © 2023 AiMentor. All Rights Reserved.</p>
          <p className="opacity-70">Social Media</p>
          <div className="flex justify-between space-x-3 text-2xl">
            <button>
              <FaFacebookF></FaFacebookF>
            </button>
            <button>
              <FaTwitter></FaTwitter>
            </button>
            <button>
              <FaInstagramSquare></FaInstagramSquare>
            </button>
            <button>
              <FaLinkedinIn></FaLinkedinIn>
            </button>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-[#3500FC] border-none  shadow-none join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
};

export default Footer;