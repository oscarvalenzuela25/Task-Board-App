import { FC, SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  url?: string;
};

const LinkedinIcon: FC<Props> = ({ url, ...props }) => {
  return (
    <svg
      width={24}
      height={24}
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
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
};

export default LinkedinIcon;
