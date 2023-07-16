import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <div>
      <List>
        {images.length > 0 &&
          images.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              onOpenModal={onOpenModal}
            />
          ))}
      </List>
    </div>
  );
};

ImageGallery.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
