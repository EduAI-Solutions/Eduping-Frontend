interface DiamondProps {
  className: string;
  width: number;
  height: number;
}

const Diamond = ({ className, width, height }: DiamondProps) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`${width}rem`}
        height={`${height}rem`}
        viewBox="0 0 125 135"
        fill="none"
      >
        <path
          d="M60.4304 5.92501C60.9235 4.17494 63.4042 4.17494 63.8973 5.925L64.4886 8.02398C72.164 35.2698 92.892 56.9113 119.782 65.7538C121.357 66.2718 121.357 68.5001 119.782 69.0181C92.892 77.8607 72.164 99.5021 64.4886 126.748L63.8973 128.847C63.4042 130.597 60.9235 130.597 60.4305 128.847L59.8391 126.748C52.1637 99.5021 31.4357 77.8607 4.54594 69.0181C2.97074 68.5001 2.97074 66.2718 4.54595 65.7538C31.4357 56.9113 52.1637 35.2698 59.8391 8.02398L60.4304 5.92501Z"
          fill="url(#paint0_linear_2412_667)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2412_667"
            x1="62.1639"
            y1="-0.228088"
            x2="62.1639"
            y2="135"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#9CF993" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Diamond;
