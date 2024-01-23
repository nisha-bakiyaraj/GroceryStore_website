import React from 'react';
import "./Blog.css";
import img1 from "../Asset/blog1.png";
import img2 from "../Asset/blog2.png";
import icon1 from "../Asset/milk.png";
import icon2 from "../Asset/mutton.png";
import icon3 from "../Asset/carrot.png";
import icon4 from "../Asset/shalgom.png";
import icon5 from "../Asset/greenflower.png";
import icon6 from "../Asset/mushro.png";
import icon7 from "../Asset/fish.png";
import { Fade } from 'react-reveal';

const Blog = () => {

    return (
        <div className='mx-[320px] mt-[80px] relative'>

            <div className='flex'>

                <Fade left delay={100} >
                    <div className='w-1/2 '>
                        <div className='blog-cont-img w-[572px] h-[354px]'>
                            <div className='blogImg'>
                                <img src={img1} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade left delay={1500}>
                <div className='w-1/2 p-[80px] '>
                    <h1 className='text-[35px] font-[700]'></h1>
                    <p className='text-[13px]  text-[#7E7C7C] mt-[16px]'>
 
                    </p>
                </div>
                </Fade>
            </div>


            <div className='flex mt-[40px]'>

                <Fade right delay={2500}>
                <div className='w-1/2 p-[80px]'>
                    <h1 className='text-[35px] font-[700]'></h1>
                    <p className='text-[13px]  text-[#7E7C7C] mt-[16px]'>
                  
                    </p>
                    <div className='mt-[18px]'>
                        <h3 className='text-[18px] font-[600]'>Customer Name</h3>

                        <div className='flex gap-[18px] mt-[8px]'>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[6px] h-[6px] rounded-full bg-[#D9D9D9]'></div>
                            <div className='w-[18px] h-[6px] rounded-full bg-[#2AC01D]'></div>
                        </div>
                    </div>
                </div>
                </Fade>

                <Fade top delay={2000}>
                <div className='ml-[60px] blog-cont-img w-[572px] h-[354px]'>
                    <div className='blogImg'>
                        <img src={img2} className="" alt="" />
                    </div>
                </div>
                </Fade>
            </div>

            <hr className='mt-[70px]' />
        </div>
    );
};

export default Blog;  