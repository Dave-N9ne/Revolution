import {React, useState} from 'react';
import GiftsetTabs from './Giftset-Tabs';

const Giftset = () => {
  const [activeTab, setActiveTab] = useState(0);

  function clickHandler(id) {
    setActiveTab(id)
  }

  return (
    <section id="giftset" className="giftset">
      <div class="container giftset__container">
        <span class="giftset__slogan slogan">Best Gift For Best Friend</span>
        <h2 class="giftset__title title">GIFTSET</h2>
        <GiftsetTabs 
          activeTab={activeTab}
          clickHandler={clickHandler}
        />
      </div>
    </section>
  )
}

export default Giftset;