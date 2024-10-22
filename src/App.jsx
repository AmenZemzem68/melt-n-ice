import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Newsletter from "./sections/Newsletter";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-l wide:padding-r padding-b bg-background-alt">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding bg-background-alt">
        <SuperQuality />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Newsletter />
      </section>
      <section className=" bg-black p-28 max-sm:padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
