import { React } from 'react';
import {GiftsetTabsData} from './GiftsetTabsData';

const addAdditionalStyle = (
  condition, 
  addedStyle, 
  ...initialStyles
) => 
  `${initialStyles.map(style => `${style} `)}
   ${condition ? `${addedStyle}` : ``}`

const addTabsContent = (activeTab) => {
  return GiftsetTabsData.map((item, index) => {
    return (
      <div
        className={addAdditionalStyle(
            activeTab === index,
            'active',
            'giftset__content tabs__content flex-x'
          )}
        key={index}
      >
        <div class="giftset__img">
          <img src={item.img} alt="gift" />
        </div>
        <acticle class="giftset__article">
          <span class="giftset__price price">
            {item.price}
          </span>
          <h3 class="giftset__sub-title sub-title">
            {item.subTitle}
          </h3>
          <p class="giftset__desc desc">
            {item.desc}
          </p>
          <ul class="giftset__facts flex-x">
            <li class="giftset__fact flex-x">
              <div class="giftset__icon">
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.99469 18.9842C6.74561 15.1554 6.74029 11.175 6.96892 9.32288C1.6998 11.8303 -1.45317 17.2134 0.668305 22.0386C3.16728 22.2877 6.67117 21.5296 8.99469 18.9842Z" fill="#415167" />
                  <path d="M9.57423 19.9104C7.52188 22.0875 3.99672 23.3168 1.30634 23.1543C3.76278 26.7015 10.2973 28.2612 16.1832 24.8386C13.663 24.2266 11.2863 22.4395 9.57423 19.9104Z" fill="#415167" />
                  <path d="M15.7313 11.9603C12.2114 8.06111 11.919 4.34061 12.4029 1.89819C8.76604 3.98319 6.99017 9.32835 8.41512 14.7764C10.0049 21.0043 15.6568 25.7159 20.9579 23.3438C21.1227 21.5946 20.9047 17.6683 15.7313 11.9603Z" fill="#415167" />
                  <path d="M25.5251 10.1894C23.9088 3.98314 18.512 -0.305992 13.5992 1.35117C12.8814 3.68528 12.9824 7.43827 16.5341 11.2617C18.1452 13.1571 22.1276 17.6466 22.0531 22.7318C25.3178 20.4356 26.8437 15.3667 25.5251 10.1894Z" fill="#415167" />
                </svg>
              </div>
              <div class="giftset__info">
                Loại hạt <br />
                Fine Robusta Blend
              </div>
            </li>
            <li class="giftset__fact flex-x">
              <div class="giftset__icon">
                <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.0193 1.39404C13.8589 1.11733 13.5115 0.982458 13.2456 0.954834C12.9273 0.960028 12.6374 1.13811 12.4864 1.4209L9.375 7.24549L11.0068 9.11612L12.5155 6.68297C12.8364 6.16591 13.6838 6.16591 14.0047 6.68297L15.5135 9.11607L17.2852 7.03748L14.0193 1.39404Z" fill="#415167" />
                  <path d="M18.75 9.59615L18.2335 8.70215L16.152 11.2304C15.9802 11.4679 15.7313 11.623 15.4102 11.5927C15.1192 11.5823 14.8522 11.4262 14.6977 11.1767L13.2451 8.83054L11.7925 11.1767C11.638 11.4263 11.371 11.5823 11.08 11.5927C11.0689 11.5936 11.0577 11.5936 11.0474 11.5936C10.7675 11.5936 10.504 11.4592 10.3382 11.2304L8.44351 8.96136L0.104626 24.4857C-0.0413052 24.7604 -0.0344482 25.0933 0.124376 25.361C0.283201 25.6297 0.569965 25.7935 0.878999 25.7935H10.7786C10.5262 25.0756 10.5704 24.2742 10.9485 23.5982L18.75 9.59615Z" fill="#415167" />
                  <path d="M21.9508 10.3034C21.6387 9.7454 20.7246 9.7454 20.4124 10.3034L18.5742 13.5865L21.1816 16.4494L23.7891 13.5865L21.9508 10.3034Z" fill="#415167" />
                  <path d="M29.8866 24.4724L24.6612 15.2075L21.8278 18.383C21.6605 18.5847 21.4133 18.7016 21.1524 18.7016C20.8915 18.7016 20.6443 18.5847 20.4769 18.383L17.6436 15.2075L12.4767 24.4725C12.3231 24.7469 12.3257 25.0828 12.4836 25.3547C12.6415 25.6265 12.9298 25.7935 13.2422 25.7935H29.121C29.4334 25.7935 29.7218 25.6265 29.8797 25.3546C30.0376 25.0827 30.0402 24.7469 29.8866 24.4724Z" fill="#415167" />
                </svg>
              </div>
              <div class="giftset__info">Loại hạt</div>
            </li>
          </ul>
          <ul class="giftset__buttons">
            <li class="giftset__item">
              <a href="#" class="giftset__button button">
                MUA NGAY
              </a>
            </li>
            <li class="giftset__item">
              <a href="#" class="giftset__button button">
                CHI TIẾT
              </a>
            </li>
          </ul>
        </acticle>
      </div>
    )
  })
} 

const addTabsButtons = (activeTab, clickHandler) => {
  return GiftsetTabsData.map((_, index) => {
    return (
        <li
          className="tabs__item center-full"
          key={index}
        >
          <button
            className={addAdditionalStyle(
              activeTab === index,
              'active',
              'tabs__button'
            )}
            onClick={() => clickHandler(index)}
          >
            {index + 1}
          </button>
        </li>
    )
  })
}

const GiftsetTabs = ({activeTab, clickHandler}) => {
  return (
    <div class="giftset__tabs tabs flex-x">
      <div class="giftset__body tabs__body">
        {addTabsContent(activeTab)}
      </div>
      <ul className="tabs__buttons grid">
        {addTabsButtons(activeTab, clickHandler)}
      </ul>
    </div>
  )
}

export default GiftsetTabs;