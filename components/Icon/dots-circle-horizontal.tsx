import * as React from "react";

function DotsCircleHorizontal(props) {
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
      className="icon icon-tabler icon-tabler-dots-circle-horizontal"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M8 12L8 12.01"></path>
      <path d="M12 12L12 12.01"></path>
      <path d="M16 12L16 12.01"></path>
    </svg>
  );
}

export default DotsCircleHorizontal;
