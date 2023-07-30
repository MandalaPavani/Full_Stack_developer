import React from 'react';

interface HeroBannerProps {
  title: string;
  description: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, description }) => {
  return (
    <div className="hero-banner">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default HeroBanner;
