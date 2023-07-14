import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            item={image}
            selectedImage={onOpenModal}
          />
        ))}
    </ul>
  );
};
