// components/LoadingSpinner.jsx
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <span className="loading loading-spinner loading-lg text-warning"></span>
    </div>
  );
};

export default LoadingSpinner;
