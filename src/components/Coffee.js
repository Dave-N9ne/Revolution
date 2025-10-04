import CoffeeCards from './CoffeeCards.js';

import '../css/coffee.css';
import '../css/css-media/coffeeMedia.css';

const Coffee = () => {
  return (
    <section class="coffee">
        <div class="container coffee__container">
          <span lang="en" class="coffee__slogan slogan">
            Your Personalized Coffee
          </span>
          <h2 lang="en" class="coffee__title title">
            COFFEE BUILDS YOUR BASE
          </h2>
          <ul class="coffee__list coffee__grid grid">
            <CoffeeCards />
          </ul>
        </div>
      </section>
  )
}

export default Coffee;