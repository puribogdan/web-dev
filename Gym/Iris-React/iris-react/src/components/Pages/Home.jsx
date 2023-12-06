import React from 'react';
import Carousel from '../GalleryCarousel/Carousel';

import ScrollToAnchor from '../ScrollToAnchor';

import {
  Header,
  WhyUs,
  OurStory,
  Info,
  Antrenori,
  Membership,
  Footer,
} from '../index';

const Home = () => {
  return (
    <>
      <ScrollToAnchor />
      <Header />
      <WhyUs />
      <OurStory />
      <Carousel />
      <Info />
      <Antrenori />
      <Membership />
      <Footer />
    </>
  );
};

export default Home;
