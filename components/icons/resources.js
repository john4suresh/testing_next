import * as React from "react";

const Resources = ({ active }, props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g
      stroke={active ? "#0073C4" : "#141C36"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M11.017 1.875H3.003c-.53 0-1.04.212-1.416.59C1.21 2.841 1 3.353 1 3.887v16.1c0 .533.211 1.045.587 1.423.375.377.885.589 1.416.589h12.02c.532 0 1.042-.212 1.418-.59.375-.377.586-.889.586-1.422V7.913l-6.01-6.038Z" />
      <path d="M11.018 1.875v6.037h6.01M13.021 12.943H5.008M13.021 16.969H5.008M7.011 8.919H5.008" />
    </g>
  </svg>
);
export default Resources;
