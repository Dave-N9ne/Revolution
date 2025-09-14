import '../css/HeaderContainer.css';
import '../css/HeaderContainer-media.css';

import background from '../img/header-bg.jpg';
import playButton from '../img/header-button-play.svg';

function HeaderContainer() {
    return (
      <header class="header">
      <div class="container header__container header-container">
        <div class="header__wrapper">
          <nav class="header__nav header-nav nav center-y">
            <div class="header__logo">
              <img src="./images/icons/revo-icon.svg" alt="" />
            </div>
            <div class="header__control">
              <div class="header__cart">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.31755 1.66388H14.7273C14.7677 1.66388 14.8045 1.67932 14.8424 1.69091L15.172 0.589594C15.2768 0.239363 15.5945 0 15.9546 0H17.5909C17.8168 0 18 0.186249 18 0.41598V1.2479C18 1.47763 17.8168 1.66388 17.5909 1.66388H16.5606L14.0045 10.2046L14.9592 11.337C15.3365 11.7846 15.5064 12.4013 15.3327 12.9637C15.1106 13.683 14.4863 14.1429 13.7664 14.1429H2.04544C1.81951 14.1429 1.63634 13.9566 1.63634 13.7269V12.895C1.63634 12.6652 1.81951 12.479 2.04544 12.479H13.7665L12.4697 10.9406C12.4371 10.9019 12.4131 10.8583 12.3884 10.8151H4.46083C3.82675 10.8151 3.24974 10.4428 2.97974 9.8594L0.125029 3.69125C0.0431461 3.51374 0 3.31673 0 3.12131V3.0035C0 2.26369 0.589897 1.66388 1.31755 1.66388Z" fill="black" />
                  <path d="M13.1785 18.0001C12.2909 18.0001 11.5714 17.2805 11.5714 16.3929C11.5714 15.5053 12.2909 14.7858 13.1785 14.7858C14.0661 14.7858 14.7856 15.5053 14.7856 16.3929C14.7856 17.2805 14.0661 18.0001 13.1785 18.0001Z" fill="black" />
                  <path d="M3.53568 18.0001C2.64808 18.0001 1.92854 17.2805 1.92854 16.3929C1.92854 15.5053 2.64808 14.7858 3.53568 14.7858C4.42328 14.7858 5.14282 15.5053 5.14282 16.3929C5.14282 17.2805 4.42328 18.0001 3.53568 18.0001Z" fill="black" />
                </svg>
              </div>
              <div class="button header__burger">
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="header__row">
        <div class="header__body">
          <div class="header__content">
            <h1 class="header__main-title main-title">
              <span>
                YOUR <span class="header_beige-bg">PERSONALIZED</span> COFFEE
              </span>
            </h1>
          </div>
        </div>
        <div class="header__bg">
          <img src={background} alt="background" />
          <button class="header__play-button">
            <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_0_219)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 47C24 61.9117 36.0883 74 51 74C65.9117 74 78 61.9117 78 47C78 32.0883 65.9117 20 51 20C36.0883 20 24 32.0883 24 47Z" fill="white" />
              </g>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M58.65 47L47.85 53.75V40.25L58.65 47Z" fill="#C7A17A" />
              <defs>
                <filter id="filter0_d_0_219" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="12" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.291826 0 0 0 0 0.291826 0 0 0 0 0.291826 0 0 0 0.5 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_219" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_219" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
        <nav class="header__sidebar sidebar grid">
          <ul class="sidebar__list nav__list flex-y center-x">
            <li class="sidebar__item nav__item"><a href="#" class="sidebar__link nav__link link">TRANG CHỦ</a></li>
            <li class="sidebar__item nav__item"><a href="#" lang="en" class="sidebar__link nav__link link">COFFEE</a></li>
            <li class="sidebar__item nav__item"><a href="#" class="sidebar__link nav__link link">PHIN MẠ MÀU</a></li>
            <li class="sidebar__item nav__item"><a href="#combo" class="sidebar__link nav__link link">COMBO PHIN PHÊ</a></li>
            <li class="sidebar__item nav__item"><a href="#giftset" lang="en" class="sidebar__link nav__link link">GIFTSET</a></li>
            <li class="sidebar__item nav__item"><a href="#" class="sidebar__link nav__link link">LIÊN HỆ</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default HeaderContainer;