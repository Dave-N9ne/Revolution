import {React} from 'react';
import ComboSwiper from './ComboSwiper';

import '../css/combo.css';
import '../css/css-media/comboMedia.css';

const Combo = () => {
  return (
    <section class="combo">
        <div class="container combo__container">
          <span lang="en" class="combo__slogan slogan">
            Your Personalized Coffee
          </span>
          <h2 class="combo__title title">COMBO PHIN PHÊ</h2>
          <ComboSwiper />
        </div>
      </section>
  )
}

export default Combo;