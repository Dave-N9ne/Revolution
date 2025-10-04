import { CoffeeData } from './CoffeeData.js';

const CoffeeCards = () => {
  return (
    CoffeeData.map((data, index) => {
      return (
        <li class="coffee__item coffee__grid-element grid-element">
          <article class="coffee__article">
            <div class="coffee__logo">
              <img
                src={data.img} 
                alt="icon"
              />          
            </div>
            <h3 class="coffee__sub-title sub-title">
              {data.subTitle}
            </h3>
            <p class="coffee__desc desc">
              {data.desc}
            </p>
          </article>
        </li>
      )
    })
  )
}

export default CoffeeCards