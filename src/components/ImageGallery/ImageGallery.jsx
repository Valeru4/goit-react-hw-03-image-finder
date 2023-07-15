import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <div>
      <ul>
        {images.length > 0 &&
          images.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              onOpenModal={onOpenModal}
            />
          ))}
      </ul>
    </div>
  );
};
