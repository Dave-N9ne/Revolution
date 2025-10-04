import {React} from 'react'
import TasteSwiper from './TasteSwiper.js';
import 'swiper/css';

import '../css/taste.css';
import '../css/css-media/tasteMedia.css';

const Taste = () => {
  return (
    <section className="taste">
      <div class="container taste__container taste-container">
        <span lang="en" class="taste__slogan slogan">Choose Your Favorite</span>
        <h2 class="taste__title title">CHUẨN GU ĐÚNG VỊ</h2>
        <TasteSwiper />
      </div>
    </section>
  )
}

export default Taste;