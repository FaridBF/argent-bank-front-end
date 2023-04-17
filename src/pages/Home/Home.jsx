import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

import '../Home/home.css';

import iconSecurity from '../../assets/icons/icon-security.png';
import iconChat from '../../assets/icons/icon-chat.png';
import iconMoney from '../../assets/icons/icon-money.png';
import FeaturesItem from '../../components/FeaturesItem/FeaturesItem';

export default function Home() {
  const titleChat = 'You are our #1 priority';
  const titleMoney = 'More savings means higher rates';
  const titleSecurity = 'Security you can trust';
  const descriptionChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.';
  const descriptionMoney =
    'The more you save with us, the higher your interest rate will be!';
  const descriptionSecurity =
    '  We use top of the line encryption to make sure your data and money is always safe.';

  return (
    <div>
      <Header />
      <main>
        <Banner />
        <section className='features'>
          <h2 className='sr-only'>Features</h2>
          <FeaturesItem
            icon={iconChat}
            title={titleChat}
            description={descriptionChat}
          />
          <FeaturesItem
            icon={iconMoney}
            title={titleMoney}
            description={descriptionMoney}
          />
          <FeaturesItem
            icon={iconSecurity}
            title={titleSecurity}
            description={descriptionSecurity}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
