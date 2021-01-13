import * as React from 'react';

function ArrowNarrowRight(props) {
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
      <path d="M5 12h14M15 16l4-4M15 8l4 4" />
    </svg>
  );
}

export default ArrowNarrowRight;
