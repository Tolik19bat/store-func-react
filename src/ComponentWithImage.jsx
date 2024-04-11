import React from 'react';
import image1 from '../public/img/item-black.jpg';
import image2 from '../public/img/item-blue.jpg';

function ComponentWithImage({ isImage1 }) {
  const image = isImage1 ? image1 : image2;

  return <img src={image} alt="Описание" />;
}

export default ComponentWithImage;