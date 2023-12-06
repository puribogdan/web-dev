import React from 'react';
import './Membership.css';

const MembershipCard = ({ type, price, days }) => {
  return (
    <>
      <div className="type-wrapper">
        <h1>{type}</h1>
      </div>
      <div className="text-wrapper-card">
        <div className="price-wrapper">
          <h1 className="price">{price}</h1>
          <h4 className="ron">RON</h4>
          <h4 className="luna">/lună</h4>
        </div>

        <h4>număr de vizite</h4>
        <h3>{days}</h3>
        <h4>echipament</h4>
        <h3>nelimitat</h3>

        <button>Join now</button>
      </div>
    </>
  );
};

const Membership = () => {
  const membershipCardData = [
    {
      type: 'Elev',
      price: '120',
      days: '30',
    },
    {
      type: 'Standard',
      price: '140',
      days: '30',
    },
    {
      type: 'Elev',
      price: '120',
      days: '30',
    },
  ];

  return (
    <div className="membership-wrapper">
      <h1 id="membership">Membership</h1>
      <h4>Alege abonamentul potrivit</h4>
      <div className="membership-cards-wrapper">
        {membershipCardData.map((card, index) => (
          <div className="card" key={index}>
            <MembershipCard
              type={card.type}
              price={card.price}
              days={card.days}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
