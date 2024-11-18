import React from "react";
import CommonButton from "../ui/CommonButton";

const Pricing = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-white text-center mt-28">
        Simple pricing, exceptional value
      </h2>
      <div className="flex">
        <div>
          <h2>$2,995 per month</h2>
          <CommonButton buttonText="Start Hiring" />
        </div>
        <div>
          <li>Elite video editing talent from the Philippines</li>
          <li>Elite video editing talent from the Philippines</li>
          <li>Elite video editing talent from the Philippines</li>
          <li>Elite video editing talent from the Philippines</li>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
