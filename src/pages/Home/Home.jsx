import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';

import iconSecurity from '../../assets/icons/icon-security.png';
import iconChat from '../../assets/icons/icon-chat.png';
import iconMoney from '../../assets/icons/icon-money.png';
import FeaturesItem from '../../components/FeaturesItem/FeaturesItem';
import '../Home/home.css';

export default function Home() {
  // Feature's titles
  const featureTitleChat = 'You are our #1 priority';
  const featureTitleMoney = 'More savings means higher rates';
  const featureTitleSecurity = 'Security you can trust';
  // Feature's texts
  const featureDescriptionChat =
    'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.';
  const featureDescriptionMoney =
    'The more you save with us, the higher your interest rate will be!';
  const featureDescriptionSecurity =
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
            title={featureTitleChat}
            description={featureDescriptionChat}
          />
          <FeaturesItem
            icon={iconMoney}
            title={featureTitleMoney}
            description={featureDescriptionMoney}
          />
          <FeaturesItem
            icon={iconSecurity}
            title={featureTitleSecurity}
            description={featureDescriptionSecurity}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
