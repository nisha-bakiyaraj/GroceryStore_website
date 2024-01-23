import React from "react";
import "./SliderOne.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination'
import { Navigation, Autoplay } from "swiper/modules";
import { MdDoubleArrow } from "react-icons/md";



import img1 from "../Asset/a.jfif";
import img2 from "../Asset/real capsicum.jfif";
import img3 from "../Asset/realstraw.jfif";
import img4 from "../Asset/realbanana.jfif";
import img5 from "../Asset/realonion.jfif";
import img6 from "../Asset/malliipudina.jfif";
import img7 from "../Asset/spicy.jpg";
import img8 from "../Asset/breadslice.jfif";
import img9 from "../Asset/rice.jfif";
import img10 from "../Asset/dallll.jfif";


const SliderOne = () => {
    return ( 
        <div>
            <Swiper
            modules = {[Autoplay, Navigation]}
            slidesPerView={4}
            spaceBetween={0}
            autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}

           
                navigation={true}
                
                className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img1} alt=""/>
                            <div className="content">
                                <h1>Tomato</h1>
                                <h2>Rs 45/kg</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img2} alt=''/>
                            <div className="content">
                                <h1>capsicum</h1>
                                <h2>Rs 12</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img3} alt=''/>
                            <div className="content">
                                <h1>Strawberries</h1>
                                <h2>Rs 450/kg</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img4} alt=''/>
                            <div className="content">
                                <h1>Banana</h1>
                                <h2>Rs 60</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img5} alt=""/>
                            <div className="content">
                                <h1>Onion</h1>
                                <h2>Rs 80/Kg</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img6} alt=''/>
                            <div className="content">
                                <h1>greens</h1>
                                <h2>Rs 35</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img7} alt=''/>
                            <div className="content">
                                <h1>Spices</h1>
                                <h2>Rs 45</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img8} alt=''/>
                            <div className="content">
                                <h1>Bread</h1>
                                <h2>Rs 45</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img9} alt=""/>
                            <div className="content">
                                <h1>Rice</h1>
                                <h2>Rs 67/Kg</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hoverIncrease">
                            <img src={img10} alt=''/>
                            <div className="content">
                                <h1>Dall</h1>
                                <h2>Rs 159</h2>
                                <div className="price-underline"></div>
                               <div className="select-btn">
                                    <p>SELECT OPTION</p>
                                    <MdDoubleArrow className="m1-1" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

            </Swiper>

        </div>
     );
}
 
export default SliderOne;