import { React, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css';
import '../css/taste.css';

import { TasteSwiperData } from './TasteSwiperData.js';

const slides = TasteSwiperData.map((slide) => {
  return (
    <SwiperSlide>
      <article class="taste__slide flex-x">
        <div class="taste__img">
          <img
            src={slide.image} 
            alt="coffee"
          />
        </div>
        <div class="taste__content">
          <span class="taste__price price">
            {slide.price}
          </span>
          <h3 class="taste__sub-title sub-title">
            {slide.subtitle}
          </h3>
          <p class="taste__desc desc">
            {slide.desc}
          </p>
          <ul class="taste__buttons buttons flex-x">
            <li class="taste__item">
              <button class="taste__button button">Mua Ngay</button>
            </li>
            <li class="taste__item">
              <button class="taste__button button">Chi Tiet</button>
            </li>
          </ul>
        </div>
      </article>
    </SwiperSlide>
  )
});

const TasteSwiper = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        className='taste__swiper swiper'
        modules={[Navigation, Grid]}
        spaceBetween={30} 
        autoHeight={false}
        slidesPerView={window.innerWidth <= 992 ? 1 : 2} 
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        grid={{
          rows: window.innerWidth <= 992 ? 1 : 2,
          fill: window.innerWidth <= 992 ? 'row' : 'column'
        }}
        onSlideChange={() => console.log('slide change')} 
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      > 
       {slides}
        <div className='swiper-button-prev'>
          <img
            className='swiper-navigation-arrow'
            src="../img/slider-arrow-left.svg" 
            alt="arrow" 
          />
        </div>
        <div className='swiper-button-next'>
          <img
            className='swiper-navigation-arrow'
            src="../img/slider-arrow-right.svg" 
            alt="arrow"
          />
        </div>
      </Swiper>
    </>
    
  )
}

export default TasteSwiper;