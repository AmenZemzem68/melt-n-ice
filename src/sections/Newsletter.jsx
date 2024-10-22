import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Newsletter = () => {
  return (
    <div className="relative isolate" id="news">
      <div className="mx-auto flex justify-center items-center ">
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="font-palanquin capitalize text-4xl text-center lg:max-w-lg font-bold">
            Subscribe to our{" "}
            <span className="text-button-color"> newsletter </span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text text-center">
            Stay updated with the latest trends, exclusive offers, and exciting
            news! Join our community and never miss out.
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="email"
              className="min-w-0 flex-auto rounded-full border-2 border-button-color  px-3.5 py-2 "
            />
            <Button label="Send" iconURL={arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
