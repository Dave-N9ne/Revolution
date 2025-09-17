import { React } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import 'swiper/css/grid';
import 'swiper/css';
import '../css/taste.css';

import Img1 from '../img/slider1-1-morning.webp';
import Img2 from '../img/slider1-2-origin.webp';
import Img3 from '../img/slider1-3-everyday.webp';
import Img4 from '../img/slider1-4-bold.webp';
import Img5 from '../img/slider1-5-honey.webp';
import Img6 from '../img/slider1-6-natural.webp';

const slidesData = [
  {
    image: Img1,
    price: '99.000',
    subtitle: 'REVO Morning',
    desc: 'đắng, hậu ngọt, hương hoa'
  },
  {
    image: Img2,
    price: '139.000',
    subtitle: 'REVO Origin',
    desc: 'hậu ngọt, ít đắng, vị chua dâu'
  },
  {
    image: Img3,
    price: '85.000',
    subtitle: 'REVO Everyday',
    desc: 'cân bằng, hậu đắng, vị chocolate'
  },
  {
    image: Img4,
    price: '75.000',
    subtitle: 'REVO Đậm Đà',
    desc: 'đậm đà, đắng, truyền thống'
  },
  {
    image: Img5,
    price: '195.000',
    subtitle: 'REVO Honey',
    desc: 'độ ngọt cao, hậu ngọt, chua'
  },
  {
    image: Img6,
    price: '169.000',
    subtitle: 'REVO Natural',
    desc: 'hậu ngọt, hương hoa, vị chua dâu'
  },
];

const slides = slidesData.map((slide) => {
  return (
    <SwiperSlide>
      <article class="taste__article flex-x">
        <div class="taste__img">
          <img
            src={slide.image} 
            alt=""
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
          <ul class="taste__buttons flex-x">
            <li class="taste__item">
              <button class="taste__button button">MUA NGAY</button>
            </li>
            <li class="taste__item">
              <button class="taste__button button">CHI TIẾT</button>
            </li>
          </ul>
        </div>
      </article>
    </SwiperSlide>
  )
});

const TasteSwiper = () => {
  return (
    <Swiper
      className='taste__swiper swiper'
      modules={[Grid]}
      spaceBetween={30} 
      autoHeight={false}
      slidesPerView={2} 
      grid={{
        rows: 2,
        fill: "column"
      }}
      onSlideChange={() => console.log('slide change')} 
      onSwiper={(swiper) => console.log(swiper)} 
    > 
     {slides}
    </Swiper>
  )
}

export default TasteSwiper;