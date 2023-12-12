import React from 'react';
import './Antrenori.css';

const AntrenoriCard = ({ image, name, specialization, description }) => {
  return (
    <>
      <img src={image} alt={name} className="antrenori-img" />
      <div className="img-text-wrapper">
        <h1>{name}</h1>
        <h2>{specialization}</h2>
        <p>{description}</p>
        <div>
          <img src="assets/facebook-icon.png" alt="facebook-icon" />
          <img src="assets/instagram-icon.png" alt="instagram-icon" />
        </div>
      </div>
    </>
  );
};

const Antrenori = () => {
  const coachesData = [
    {
      name: 'Pitul Diamir',
      specialization: 'Personal Trainer',
      description:
        'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
      image: '/assets/Diamir.jpg',
    },
    {
      name: 'Lorem Ipsum',
      specialization: 'Trainer & Nutritionist',
      description:
        'Experienced yoga teacher specialized in Hatha and Vinyasa...',
      image: '/assets/trainer.jpg',
    },
    // Add more coaches as needed
  ];

  return (
    <div className="antrenori-wrapper">
      <h1 className="antrenori-title">Antrenori</h1>
      <p className="antrenori-p">
        Setează standarde înalte cu ajutorul echipei noastre
      </p>
      <div className="antrenori-cards-wrapper">
        {coachesData.map((antrenor, index) => (
          <div className="antrenor-card" key={index}>
            <AntrenoriCard
              image={antrenor.image}
              name={antrenor.name}
              specialization={antrenor.specialization}
              description={antrenor.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Antrenori;
