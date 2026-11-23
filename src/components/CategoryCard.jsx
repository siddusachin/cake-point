export default function CategoryCard({ title, image, price, oldPrice, imagePosition = "center" }) {
  return (
    <article className="category-card">
      <img
        className="category-card__image"
        src={image}
        alt={title}
        style={{ objectPosition: imagePosition }}
      />
      <h3 className="category-card__title">{title}</h3>
      <p className="category-card__price">
        <span className="category-card__starts">Starts at</span>
        <span className="category-card__now">₹{price}</span>
        <span className="category-card__old">
          ₹{oldPrice}
          <img src="/assets/old-price-strike.svg" alt="" aria-hidden="true" />
        </span>
      </p>
      <a className="cta" href="#cakes">
        <span>View Cakes</span>
        <img src="/assets/cta-arrow.svg" alt="" aria-hidden="true" width="45" />
      </a>
    </article>
  );
}
