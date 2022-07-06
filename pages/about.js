import React, { useState } from 'react'; 
import { Navigation, Pagination } from 'swiper';  
import Image from "next/Image"
// import {Image} from "../assets/2.PNG"

// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";   
import "swiper/css";


import { Swiper, SwiperSlide } from 'swiper/react';

import { Thumbs } from 'swiper';

const About = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null); 
  return (
    <div className='container'> 
    <h1>About</h1>  

 {/* Main Swiper -> pass thumbs swiper instance */}
  <div className='row'>
    <div className='col-md-6'>
      <Swiper  
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper} 
        slidesPerView={2}
      >
        <SwiperSlide>
           grean
        </SwiperSlide>
        <SwiperSlide>
            sun
        </SwiperSlide>
      </Swiper>  
    </div>
    <div className='col-md-6'>
    <Swiper
      modules={[Thumbs]} 
      thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} 
    >
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide> 
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide> 
    </Swiper> 
       
    </div>
  </div>
      
     


    <Image src="/3.PNG" 
       alt="Picture of the author"
      width={500}
      height={500}
    />
    <button type="button" className="btn btn-primary">Primary</button>

    <div className='row'>
      <div className='col-6'>
          <Swiper
          navigation={true}
          modules={[Navigation , Pagination]} 
          className="mySwiper"   
          spaceBetween={50}
          slidesPerView={1} 
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')} 
        >
          <SwiperSlide> 
            <div className='img-wrapper'>
              <img src="3.PNG" alt="fs" />  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper'>
              <img src="2.PNG" alt="fs" />  
            </div>
          </SwiperSlide> 
        </Swiper>
      </div>
    </div>

  </div>
  )
}

export default About