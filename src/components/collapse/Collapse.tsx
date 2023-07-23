import { FC, PropsWithChildren } from "react";

interface CollapseProps {
  title: string;
}

export const Collapse: FC<PropsWithChildren & CollapseProps> = ({
  children: Children,
  title,
}) => {
  return (
    <div className="bg-white w-full">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer  bg-gray-300 px-1 rounded mb-2">
          <span>{title}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shape-rendering="geometricPrecision"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <div className="p-2 bg-gray-200 rounded">{Children}</div>
      </details>
    </div>
  );
};
