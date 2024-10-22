import bgslider1 from "../assets/images/bg-slider-1-2.jpg";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={bgslider1}
          alt="product detail"
          width={570}
          height={522}
          className="w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-button-color"> Super </span>
          <span className="text-button-color">Premium </span> Ice Cream
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Indulge in our meticulously crafted ice creams, designed to elevate
          your experience with every scoop. We offer unmatched quality,
          innovation, and a delightful touch of sweetness.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence guarantees your satisfaction
          with every bite.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
