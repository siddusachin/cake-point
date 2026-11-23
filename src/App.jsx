import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import CustomizeForm from "./components/CustomizeForm.jsx";
import Footer from "./components/Footer.jsx";
import { categories } from "./data.js";

export default function App() {
  return (
    <div className="page" id="home">
      <Navbar />
      <Banner />

      <section className="section" id="cakes">
        <h2 className="section-title">Categories</h2>
        <div className="category-grid">
          {categories.map((c) => (
            <CategoryCard key={c.id} {...c} />
          ))}
        </div>
      </section>

      <section className="section section--spaced">
        <h2 className="section-title section-title--underlined">Customize Your Own Cake</h2>
        <CustomizeForm />
      </section>

      <section className="section section--spaced section--full">
        <h2 className="section-title section-title--with-badge">
          <img className="offer-badge" src="/assets/offer-badge.png" alt="" width="90" height="95" />
          Offer Cakes
        </h2>
        <Banner />
        <Banner />
      </section>

      <Footer />
    </div>
  );
}
