import React from 'react';
import "./Footer.css";
import logo from "../Asset/logo (1).jpg"
                                                                                                                                                
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdArrowForwardIos } from 'react-icons/md';
import { Fade } from 'react-reveal';


const Footer = () => {
    return (
        <div className='Footer'>

       


            <div className='mx-[320px] flex justify-between items-center gap-[335px] pt-[23px]'>

                <div className='flex justify-between  justify-items-center items-center  w-[60%]'>
                    <div>
                        <img src={logo} className="w-[146px] h-[93px]" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-[500]'>Call Us <br /> <span className='font-[600]'>7810074870</span> </h3>
                    </div>
                    <div>
                        <h3 className='text-[18px] font-[500]'>Follow Us</h3>
                        <div className='flex gap-[10px]'>
                            <div className='bottom-social-icon'>
                                <FaFacebookF className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <BsInstagram className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <BsTwitter className='text-white' />
                            </div>
                            <div className='bottom-social-icon'>
                                <FaTiktok className='text-white' />
                            </div>

                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src="" alt="" />
                </div>
            </div>

            <div className='mt-[24px] mx-[320px] hr-line  ' />


            <div className='mx-[320px] mt-[25px] flex justify-between'>

                <Fade left delay={1000}>
                    <div className='footer-info w-[250px] h-[250px]  z-[5]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Location</h2>
                        <p>Shop Address and <br /> Location</p>
                     
                    </div>
                </Fade>

                <Fade left delay={1500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[4]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Information</h2>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Checkout</p>
                        <p>Contact Us</p>
                    
                    </div>
                </Fade>

                <Fade left delay={2000}>
                    <div className='footer-info w-[250px] h-[250px]  z-[3]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">My Account</h2>
                        <p>My Account</p>
                        <p>Contact</p>
                        <p>Shopping cart</p>
                        <p>Shop</p>
                    </div>
                </Fade>

                <Fade left delay={2500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[2]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]">Categories</h2>
                        <p>Fruit</p>
                        <p>Dairy</p>
                        <p>Vegitable</p>
                        <p>Health</p>
                    </div>
                </Fade>

                <Fade left delay={3500}>
                    <div className='footer-info w-[250px] h-[250px]  z-[1]'>
                        <h2 className="text-[22px] font-[600] mb-[30px]"></h2>
                        <p>Signup</p>

                        <div className='footer-search-bar'>
                            <input type="text" placeholder='Email Address' />
                            <MdArrowForwardIos className='text-[#01E834] text-[36px] mr-[5px]' />
                        </div>
                    </div>
                </Fade>
            </div>

            <div className='mt-[68px] mx-[320px] hr-line  ' />





        </div>
    );
};

export default Footer;
