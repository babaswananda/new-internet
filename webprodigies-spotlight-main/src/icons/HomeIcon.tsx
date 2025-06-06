import React from "react";

type Props = {
  className?: string;
}

const HomeIcon = ({className}:Props) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6 14.6668V8.00016H10V14.6668M2 6.00016L8 1.3335L14 6.00016V13.3335C14 13.6871 13.8595 14.0263 13.6095 14.2763C13.3594 14.5264 13.0203 14.6668 12.6667 14.6668H3.33333C2.97971 14.6668 2.64057 14.5264 2.39052 14.2763C2.14048 14.0263 2 13.6871 2 13.3335V6.00016Z"
        className="stroke-foreground"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
