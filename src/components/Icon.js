import React from "react";

const Icon = ({ icon: IconElement, className }) => (
  <IconElement className={`material-icons ${className}`} />
);

export default Icon;
