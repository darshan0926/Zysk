import React from 'react';
import '../styles/Analytics.css';

const companyData = [
  { name: 'Boltshift', logo: require('../assets/Logomark (3).png') },
  { name: 'Lightbox', logo: require('../assets/Logomark (4).png') },
  { name: 'FeatherDev', logo: require('../assets/Logomark (5).png') },
  { name: 'Spherule', logo: require('../assets/Logomark (6).png') },
  { name: 'GlobalBank', logo: require('../assets/Logomark (7).png') },
  { name: 'Nietzsche', logo: require('../assets/Logomark (9).png') },
];

const Analytics = () => {
  return (
    <section className="analytics">
      <p>Join 4,000+ Companies already growing</p>
      <div className="analytics__logos">
        {companyData.map((company, index) => (
          <div key={index} className="analytics__logo-item">
            <img src={company.logo} alt={`${company.name} Logo`} />
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Analytics;
