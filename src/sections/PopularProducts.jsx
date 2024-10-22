import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-button-color"> Best </span> Sellers
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-text-color">
          Indulge in the finest and most irresistible ice cream flavors.
          Discover a world of creamy delights, crafted to bring you joy with
          every scoop!
        </p>
      </div>

      <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
