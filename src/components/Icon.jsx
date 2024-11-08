import React from 'react';

const Icon = ({ type }) => {
  switch (type) {
    case 'christmasGift':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Christmas Gift Icon SVG path here */}
          <rect width="24" height="24" fill="red" />
        </svg>
      );
    case 'winterClothes':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Winter Clothes Icon SVG path here */}
          <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
        </svg>
      );
    case 'christmasFoodBox':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Christmas Food Box Icon SVG path here */}
          <path d="M5 20l14-14-14 14z" fill="green" />
        </svg>
      );
    case 'anyAmount':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Any Amount Icon SVG path here */}
          <path d="M12 2l8.66 20H3.34L12 2z" fill="blue" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
