import React from 'react';
import iconSedans from './images/icon-sedans.svg';
import iconSuvs from './images/icon-suvs.svg';
import iconLuxury from './images/icon-luxury.svg';

function Card({ image, title, text, cardClassName, actionClassName }) {
  return (
    <div className={`p-12 ${cardClassName} flex-grow lg:w-[309px] flex flex-col items-start`}>
      <img src={image} role="presentation" alt="" className="mb-8" />
      <span className="font-cursive font-bold text-transparent-white text-4xl mb-8">{title}</span>
      <span className="font-sans text-transparent-white text-sm mb-6 lg:mb-20">{text}</span>
      <button type="button" className={`btn ${actionClassName}`}>Learn More</button>
    </div>
  );
}

function App() {
  return (
    <div className="max-w-[928px] lg:mt-[172px] mx-auto flex items-stretch flex-wrap">
      <Card
        cardClassName="bg-bright-orange"
        actionClassName="text-bright-orange"
        image={iconSedans}
        type="bright-orange"
        title="SEDANS"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
      />

      <Card
        cardClassName="bg-dark-cyan"
        actionClassName="text-dark-cyan"
        image={iconSuvs}
        type="dark-cyan"
        title="SUVS"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />

      <Card
        cardClassName="bg-very-dark-cyan"
        actionClassName="text-very-dark-cyan"
        image={iconLuxury}
        type="very-dark-cyan"
        title="LUXURY"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
      />
    </div>
  );
}

export default App;
