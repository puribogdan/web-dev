import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const Carousel = () => {
//   const settings = {
//     className: 'center',
//     centerMode: true,
//     infinite: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     speed: 500,
//   };

//   return (
//     <div>
//       <h2>Image Carousel</h2>
//       <Slider {...settings}>
//         <div>
//           <img src="./src/assets/1.png" alt="Image 1" />
//         </div>
//         <div>
//           <img src="./src/assets/2.png" alt="Image 2" />
//         </div>
//         <div>
//           <img src="./src/assets/3.png" alt="Image 3" />
//         </div>
//         <div>
//           <img src="./src/assets/1.png" alt="Image 4" />
//         </div>
//         <div>
//           <img src="./src/assets/2.png" alt="Image 5" />
//         </div>
//         <div>
//           <img src="./src/assets/3.png" alt="Image 6" />
//         </div>
//         <div>
//           <img src="./src/assets/1.png" alt="Image 7" />
//         </div>
//         <div>
//           <img src="./src/assets/2.png" alt="Image 8" />
//         </div>
//       </Slider>
//     </div>
//   );
// };

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="img-wrapper">
          <img src="/assets/1.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/2.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/1.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/2.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/1.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/2.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/1.png" alt="Image 1" />
        </div>
        <div className="img-wrapper">
          <img src="/assets/2.png" alt="Image 1" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
