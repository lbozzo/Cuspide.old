import * as React from 'react';

function Refresh(props) {
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
      <path d="M4.05 11a8 8 0 11.5 4m-.5 5v-5h5" />
    </svg>
  );
}

export default Refresh;
