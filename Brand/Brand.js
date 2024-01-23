import React from 'react';
import "./Brand.css";
import img1 from "../Asset/maggiicon.png";
import img2 from "../Asset/kissAN.jfif";
import img3 from "../Asset/goldwinner.png";
import img4 from "../Asset/mariegold.png";
import img5 from "../Asset/nestle.webp";
import img6 from "../Asset/sakthimasala_welcome_1 (4).jpg";

const Brands = () => {
    return (
        <div className='mx-[320px] mt-[60px]'>

            <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-center items-center gap-[92px]'>
                <img src={img1}  className="brandImg" alt="" />
                <img src={img2}  className="brandImg" alt="" />
                <img src={img3}  className="brandImg" alt="" />
                <img src={img4}  className="brandImg" alt="" />
                <img src={img5}  className="brandImg" alt="" />
                <img src={img6}  className="brandImg" alt="" />
            </div>

        </div>
    );
};

export default Brands;
