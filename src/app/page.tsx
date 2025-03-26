import React from 'react';
import Header from '../components/Header';
import Block from '../components/Block';
import FadeIn from '../components/animations/FadeIn';

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <FadeIn>
        <Block color="gray">
          <Header />
          <div className="content">Corpo do Bloco 1</div>
        </Block>
      </FadeIn>
      <FadeIn>
        <Block color="purple">
          <div className="content">Corpo do Bloco 2</div>
        </Block>
      </FadeIn>
    </div>
  );
};

export default HomePage;