import * as React from 'react';

function Adjustments(props) {
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
      <circle cx={6} cy={10} r={2} />
      <path d="M6 4v4M6 12v8" />
      <circle cx={12} cy={16} r={2} />
      <path d="M12 4v10M12 18v2" />
      <circle cx={18} cy={7} r={2} />
      <path d="M18 4v1M18 9v11" />
    </svg>
  );
}

export default Adjustments;
