import type { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  url?: string;
};

const PortfolioIcon: FC<Props> = ({ url, ...props }) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={
        "stroke-text-custom cursor-pointer transition-transform transition-colors duration-200 ease-in-out hover:scale-110 hover:text-custom focus:scale-110 focus:text-custom active:scale-95"
      }
      onClick={() => window.open(url, "_blank")}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l3 3l3 -3l-3 -3z" />
      <path d="M15 12l3 3l3 -3l-3 -3z" />
      <path d="M9 6l3 3l3 -3l-3 -3z" />
      <path d="M9 18l3 3l3 -3l-3 -3z" />
    </svg>
  );
};

export default PortfolioIcon;
