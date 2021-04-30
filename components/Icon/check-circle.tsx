import * as React from "react";

function CheckCircle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icon-tabler-circle-check"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  );
}

export default CheckCircle;
