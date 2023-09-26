import React, { useState } from 'react'

const items = [
    {
      title: 'Élément 1',
      content: 'Contenu de l\'élément 1',
    },
    {
      title: 'Élément 2',
      content: 'Contenu de l\'élément 2',
    },
    {
      title: 'Élément 3',
      content: 'Contenu de l\'élément 3',
    },
  ]

export const CarouselAvantageClient = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)

    const handleNext = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
      }
    
      const handlePrev = () => {
        setCurrentItemIndex((prevIndex) =>
          prevIndex === 0 ? items.length - 1 : prevIndex - 1
        )
      }

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Précédent</button>
      <div className="carousel-item">
        <h2>{items[currentItemIndex].title}</h2>
        <p className={currentItemIndex === 0 ? 'show' : ''}>
          {items[currentItemIndex].content}
        </p>
      </div>
      <button onClick={handleNext}>Suivant</button>
    </div>
  )
}


/*import React, { useState } from 'react';
import './Carousel.css'; // Assurez-vous d'avoir un fichier CSS pour le style

const items = [
  {
    title: 'Élément 1',
    content: 'Contenu de l\'élément 1',
  },
  {
    title: 'Élément 2',
    content: 'Contenu de l\'élément 2',
  },
  {
    title: 'Élément 3',
    content: 'Contenu de l\'élément 3',
  },
];

function Carousel() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={handlePrev}>Précédent</button>
      <div className="carousel-item">
        <h2>{items[currentItemIndex].title}</h2>
        <p className={currentItemIndex === 0 ? 'show' : ''}>
          {items[currentItemIndex].content}
        </p>
      </div>
      <button onClick={handleNext}>Suivant</button>
    </div>
  );
}

export default Carousel;*/