import * as React from 'react';

function HappyFace(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentcolor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx={12} cy={12} r={9} />
      <path d="M9 9h.01M15 9h.01M8 13a4 4 0 108 0m0 0H8" />
    </svg>
  );
}

export default HappyFace;
