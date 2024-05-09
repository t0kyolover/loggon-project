import React from "react";

export const LoadingSpinner = () => (
  <div className="text-center">
    <div
      className="spinner-border text-light"
      role="status"
      style={{ width: "3rem", height: "3rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);
