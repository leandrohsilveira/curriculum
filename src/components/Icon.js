import React from "react";

const Icon = ({ icon: IconElement, className }) => (
  <span className={className}>
    <IconElement />
  </span>
);

export default Icon;
