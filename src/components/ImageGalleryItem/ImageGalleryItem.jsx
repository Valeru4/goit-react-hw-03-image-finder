export const ImageGalleryItem = ({ item }) => {
  console.log(item.webformatURL);

  return (
    <li key={item.id}>
      <img src={item.webformatURL} alt={item.tag} />
    </li>
  );
};
