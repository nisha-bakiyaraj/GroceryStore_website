import React from "react";
import "./SliderTwo.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination'
import { Navigation, Autoplay } from "swiper/modules";
import { MdDoubleArrow } from "react-icons/md";



import img1 from "../Asset/dallll.jfif";
import img2 from "../Asset/rice.jfif";
import img3 from "../Asset/ghee.jpg";
import img4 from "../Asset/curd.jfif";
import img5 from "../Asset/mushroomm.jfif";
import img6 from "../Asset/malliipudina.jfif";
import img7 from "../Asset/almond.jfif";
import img8 from "../Asset/breadslice.jfif";
import img9 from "../Asset/maggi.jfif";
import img10 from "../Asset/realonion.jfif";


const SliderTwo = () => {
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
                                <h1>Product One</h1>
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
                            <img src={img2} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
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
                            <img src={img3} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
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
                            <img src={img4} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
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
                            <img src={img5} alt=""/>
                            <div className="content">
                                <h1>Product One</h1>
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
                            <img src={img6} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
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
                            <img src={img7} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
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
                                <h1>Product One</h1>
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
                                <h1>Product One</h1>
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
                            <img src={img10} alt=''/>
                            <div className="content">
                                <h1>Product One</h1>
                                <h2>Rs 45</h2>
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
 
export default SliderTwo;