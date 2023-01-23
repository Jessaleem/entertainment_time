function Card({ image, title, year }) {
  return (
    <div>
      <img src={image} alt='movie official poster' />
      <h2>{title}</h2>
      <h3>{year}</h3>
    </div>
  );
}
export default Card;
