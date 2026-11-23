// Promo banner used for the hero and both offer banners (same artwork in the design).
export default function Banner({ src = "/assets/hero-banner.png", alt = "Special delicious dessert, fresh strawberry cake" }) {
  return (
    <div className="banner">
      <img className="banner__img" src={src} alt={alt} />
      <img className="banner__dots" src="/assets/carousel-dots.svg" alt="" width="66" height="14" />
    </div>
  );
}
