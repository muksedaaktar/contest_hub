import React from 'react';
import logo from '../../../assets/logo.jpg';
import { FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10">
            {/* Top Footer */}
            <div className="footer sm:footer-horizontal p-10">
                {/* Logo + Description */}
                <aside>
                    <div className='flex gap-2 items-center mb-2'>
                        <img className='w-14 h-14 rounded-2xl' src={logo} alt="Logo" />
                        <a className="text-2xl md:text-4xl text-blue-500 font-extrabold">
                            <i>Con<span className='text-orange-400'>T</span>est<span className='text-orange-400'>Hub</span></i>
                        </a>
                    </div>
                    <p className='text-3xl font-bold'>
                        Grow yourself<span className='text-blue-400 font-extrabold text-4xl'>!</span><br />
                        Play with your brain.
                    </p>
                </aside>

                {/* Services */}
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                {/* Company */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                {/* Legal */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                {/* Social */}
               <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 items-center">
              <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
             <a href="#" className="hover:text-red-600"><FaYoutube size={24} /></a>
             <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin size={24} /></a>
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook size={24} /></a>
            </div>
               </nav>
            </div>

            {/* Bottom Footer: Copyright */}
            <div className="text-center py-4 border-t border-base-300">
                <p>© {new Date().getFullYear()} ContestHub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
