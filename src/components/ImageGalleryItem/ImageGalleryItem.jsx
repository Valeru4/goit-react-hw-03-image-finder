export const ImageGalleryItem = ({ item, onOpenModal }) => {
  console.log(item.webformatURL);

  return (
    <li key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tag}
        onClick={() => onOpenModal(item.largeImageURL)}
      />
    </li>
  );
};
