import {useState, useEffect} from 'react';

import '../css/HeaderContainer.css';
import '../css/HeaderContainer-media.css';

import background from '../img/header-bg.jpg';
import playButton from '../img/header-button-play.svg';
import VideoMP4 from '../video/header-video.mp4';
import VideoWEBM from '../video/header-video.webm';
import Poster from '../img/header-bg.jpg'

const addAdditionalStyle = (
  condition, 
  addedStyle, 
  ...initialStyles
) => 
  `${initialStyles.map(style => `${style} `)}
   ${condition ? `${addedStyle}` : ``}`

function HeaderContainer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const [isClickedVideo, setIsClickedVideo] = useState(false);
    
  function scrollHandler() {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    // ! добавить и сверстать модальное окно с видео 
    // ! подумать еше над названиями в header
    // ! добавить альтушки
    <header className={`header`}>
    <div className={`container header__container header-container`}>
      <div
        className={
          addAdditionalStyle(
            isClickedMenu,
            'active',
            'header__overlay'
        )}
        onClick={() => setIsClickedMenu(false)}
      ></div>
      <div className={
        addAdditionalStyle(
          isScrolled,
          'scrolled',
          'header__wrapper'
        )
      }>
        <nav
          className={`header__nav center-y`}>
          <div className={`header__logo`}>
            <img
              src="./images/icons/revo-icon.svg" 
              alt="revo's icon" 
            />
          </div>
          <div className={
            addAdditionalStyle(
              isScrolled,
              'scrolled',
              'header__control flex-x'
            )
          }>
            <div className="header__cart cart">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='cart_path' d="M1.31755 1.66388H14.7273C14.7677 1.66388 14.8045 1.67932 14.8424 1.69091L15.172 0.589594C15.2768 0.239363 15.5945 0 15.9546 0H17.5909C17.8168 0 18 0.186249 18 0.41598V1.2479C18 1.47763 17.8168 1.66388 17.5909 1.66388H16.5606L14.0045 10.2046L14.9592 11.337C15.3365 11.7846 15.5064 12.4013 15.3327 12.9637C15.1106 13.683 14.4863 14.1429 13.7664 14.1429H2.04544C1.81951 14.1429 1.63634 13.9566 1.63634 13.7269V12.895C1.63634 12.6652 1.81951 12.479 2.04544 12.479H13.7665L12.4697 10.9406C12.4371 10.9019 12.4131 10.8583 12.3884 10.8151H4.46083C3.82675 10.8151 3.24974 10.4428 2.97974 9.8594L0.125029 3.69125C0.0431461 3.51374 0 3.31673 0 3.12131V3.0035C0 2.26369 0.589897 1.66388 1.31755 1.66388Z" fill="white" />
                <path className='cart_path' d="M13.1785 18.0001C12.2909 18.0001 11.5714 17.2805 11.5714 16.3929C11.5714 15.5053 12.2909 14.7858 13.1785 14.7858C14.0661 14.7858 14.7856 15.5053 14.7856 16.3929C14.7856 17.2805 14.0661 18.0001 13.1785 18.0001Z" fill="white" />
                <path className='cart_path' d="M3.53568 18.0001C2.64808 18.0001 1.92854 17.2805 1.92854 16.3929C1.92854 15.5053 2.64808 14.7858 3.53568 14.7858C4.42328 14.7858 5.14282 15.5053 5.14282 16.3929C5.14282 17.2805 4.42328 18.0001 3.53568 18.0001Z" fill="white" />
              </svg>
            </div>
            <div 
              className='scrolled header__burger'
              onClick={() => setIsClickedMenu(true)}  
            >
              <span className="header-burger_line"></span>
              <span className="header-burger_line"></span>
              <span className="header-burger_line"></span>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div className={`header__row`}>
      <div className="header__body">
        <div className="header__content">
          <h1 className="header__main-title main-title">
            <span>
              YOUR <span className="header_beige-bg">PERSONALIZED</span> COFFEE
            </span>
          </h1>
        </div>
      </div>
      <div className={`header__bg`}>
        <img
          src={background} 
          alt="background" 
        />
        <button  
          className="header__play-button"
          onClick={() => setIsClickedVideo(true)}
        >
          <img
            src={playButton} 
            alt="play" 
          />
        </button>
      </div>
      <div
        className={
          addAdditionalStyle(
            isClickedVideo,
            'active',
            'header__media center-full'
          )
        }
        onClick={() => setIsClickedVideo(false)}
      >
        <video
          className='header__video'
          src={VideoWEBM}
          poster={Poster} 
          controls
          onClick={(event) => event.stopPropagation()}
        >
          <source src={VideoMP4} type="video/mp4"/>
        </video>
      </div>
      <nav className={
        addAdditionalStyle(
          isClickedMenu,
          'active',
          'header__sidebar sidebar'
        )
      }>
        <ul
          className="sidebar__list nav__list flex-y center-x"
          onClick={(event) => event.stopPropagation()}
        >
          <li className="sidebar__item nav__item"><a href="#" className="sidebar__link nav__link link">TRANG CHỦ</a></li>
          <li className="sidebar__item nav__item"><a href="#" lang="en" className="sidebar__link nav__link link">COFFEE</a></li>
          <li className="sidebar__item nav__item"><a href="#" className="sidebar__link nav__link link">PHIN MẠ MÀU</a></li>
          <li className="sidebar__item nav__item"><a href="#combo" className="sidebar__link nav__link link">COMBO PHIN PHÊ</a></li>
          <li className="sidebar__item nav__item"><a href="#giftset" lang="en" className="sidebar__link nav__link link">GIFTSET</a></li>
          <li className="sidebar__item nav__item"><a href="#" className="sidebar__link nav__link link">LIÊN HỆ</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default HeaderContainer;