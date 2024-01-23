import React from "react";
import "./DisplaySection.css";

import img1 from "../Asset/dp-img1.png";
import img2 from "../Asset/dp-img2.jpg";
import img3 from "../Asset/dp-img3.jpg";
import img8 from "../Asset/flowerkolly.png";
import cherry from "../Asset/cherry.png";
import tomato from "../Asset/tomato-slice.png";
import orange from "../Asset/orange-slice.png";
import plate from "../Asset/plate.png";
import { MdDoubleArrow } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";


const DisplaySection = () =>{
    return(
        <div className="mx-[320px] mt-[25px]">
            <div className="flex gap-[51px]">
                <div className="display-first-section">
                    <img src={img8} className="absolute -z-10"  alt=""/>
                
                <div data-aos="fade-down" data-aos-duration="2000" className="absolute right-[40px] top-[20px]" >
                    <img src={cherry}  alt=""/>
                </div>
                <div data-aos="fade-right" data-aos-duration="2000" className="absolute right-[242px] bottom-[60px]">
                <img src={tomato}alt=""/>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="absolute right-[50px] bottom-[30px]">
                <img src={orange} alt=""/>
            </div>
            <div className="absolute left-[-150px] bottom-[-180px]">
                <img src={plate} className="rotate" alt=""/>
            </div>
            <div className="content-sec-one">
                <h2>DELICIOUS
                </h2>
                <h1>SALAD</h1>
                <h3>
                    <TypeAnimation
                    sequence={['EVERYDAY.' ,2000,'']}
                 speed={[5]}
                 repeat={Infinity}
                 />   </h3>
            </div>
         <div className="shop-now-btn m1-[250px]">
            <button>Shop now</button>
            <MdDoubleArrow  className="m1-1"/>
         </div>
         
                <img src={img1}  alt=""/>
             </div>
             <div className="grid gap-[30px]">
                <div className="relative">
                    <div className="content-section-two">
                        <h1>Fresh</h1>
                        <h2>Vegetables</h2>
                        <div className="shop-now-btn ">
            <button>Shop now</button>
            <MdDoubleArrow  className="m1-1"/>
         </div>

                    </div>
                    <div>
                        <div className="hover05 column">
                            <figure>
                                <img src={img2} alt=""/>
                            </figure>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    <div className="content-section-three">
                        <h1>Fresh</h1>
                        <h2>EVERYDAY</h2>
                        <div className="shop-now-btn ">
            <button>Shop now</button>
            <MdDoubleArrow  className="m1-1"/>
         </div>
                    </div>
                    <div>
                        <div className="hover05 column">
                            <figure>
                                <img src={img3} alt=""/>
                            </figure>
                        </div>
                    </div>
                    
                </div>

             </div>
            </div>
        </div>
           
        
       
      
    )
}
export default DisplaySection;