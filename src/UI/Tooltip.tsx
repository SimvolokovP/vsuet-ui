import { PropsWithChildren, useState } from "react";

interface TooltipProps {
  title?: string;
}

export function Tooltip({
  children,
  title = "",
}: PropsWithChildren<TooltipProps>) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="w-full h-full">{children}</div>

      <div
        className={`
          absolute
          left-full
          top-1/2
          ml-3
          -translate-y-1/2
          bg-secondary
          px-3
          py-2
          rounded-sm
          whitespace-nowrap
          text-sm
          z-50
          transition-all
          duration-200
          ease-out
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-1"}
          pointer-events-none
        `}
      >
        {title}
        <div
          className="
            absolute
            z-50
            right-full
            top-1/2
            -translate-y-1/2
            w-2
            h-2
            border-4
            border-transparent
            border-r-secondary
          "
        />
      </div>
    </div>
  );
}
