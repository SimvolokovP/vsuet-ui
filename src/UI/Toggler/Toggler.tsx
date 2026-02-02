import type { ReactNode } from "react";


interface IToggleItem {
  value: string;
  label: ReactNode;
}

interface TogglerProps {
  toggleList: IToggleItem[];
  activeToggleItem: string;
  onToggleChange: (v: string) => void;
  disabled?: boolean;
}

export function Toggler({
  toggleList,
  activeToggleItem,
  onToggleChange,
  disabled = false,
}: TogglerProps) {
  return (
    <div className="bg-toggler-background rounded-sm inline-flex w-fit items-center justify-center py-[3px] px-[5px] gap-[4px]">
      {toggleList.map((toggleItem) => (
        <button
          disabled={disabled}
          onClick={() => onToggleChange(toggleItem.value)}
          key={toggleItem.value}
          className={`${
            activeToggleItem === toggleItem.value
              ? "cursor-not-allowed bg-toggler-active text-toggler-inner"
              : "cursor-pointer text-muted"
          } font-bold rounded-sm px-2 py-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-toggler-active/30 ease-in-out transition-all duration-150`}
        >
          {toggleItem.label}
        </button>
      ))}
    </div>
  );
}
