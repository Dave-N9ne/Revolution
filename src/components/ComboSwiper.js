import {React} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';

import {ComboSwiperData} from './ComboSwiperData.js';
import leftArrow from '../img/slider-arrow-left.svg';
import rightArrow from '../img/slider-arrow-right.svg';

const comboSlides = ComboSwiperData.map((data, index) => {
  return (
    <SwiperSlide>
      <article class="combo__card">
        <div class="combo__img">
          <img
            src={data.img} 
            alt="coffee" 
          />
        </div>
        <div class="combo__info">
          <ul class="combo__prices flex-x">
            <li class="combo__price price">
              {data.price}
            </li>
            <li class="combo__price price_striped">
              {data.priceStriped}
            </li>
          </ul>
          <h3 class="combo__sub-title sub-title">
            {data.subTitle}
          </h3>
          <p class="combo__desc desc">
            {data.desc}
          </p>
          <ul class="combo__buttons flex-x">
            <li class="combo__item">
              <button class="combo__button button">
                MUA NGAY
              </button>
            </li>
            <li class="combo__item">
              <button class="combo__button button">
                CHI TIẾT
              </button>
            </li>
          </ul>
        </div>
      </article>
    </SwiperSlide>
  )
})
 
const ComboSwiper = () => {
  return (
    <>
      <Swiper
        className="combo__swiper"
        modules={[Navigation]}
        spaceBetween={30}
        autoHeight={true}
        slidesPerView={window.innerWidth <= 992 ? 1 : 3}
        centeredSlides={window.innerWidth <= 992 ? true : false}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {comboSlides}
        <div className='swiper-button-prev'>
        <img
          className='swiper-navigation-arrow'
          src={leftArrow} 
          alt="arrow" 
        />
      </div>
      <div className='swiper-button-next'>
        <img
          className='swiper-navigation-arrow'
          src={rightArrow} 
          alt="arrow"
        />
      </div>
      </Swiper>
    </>
  )
}

export default ComboSwiper;