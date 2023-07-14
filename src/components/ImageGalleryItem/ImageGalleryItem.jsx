export const ImageGalleryItem = ({ item, selectedImage }) => {
  return (
    <li key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => selectedImage(item.largeImageURL)}
      />
    </li>
  );
};
