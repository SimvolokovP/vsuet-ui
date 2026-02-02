
import { forwardRef, useState, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  error?: { message?: string };
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    const {
      name = "",
      label = "",
      className,
      error,
      options = [],
      onChange,
      ...rest
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setIsOpen(false);
      onChange?.(e);
    };

    return (
      <div className="relative">
        {label && label.length > 0 && (
          <label
            htmlFor={name}
            className="block text-sm font-medium mb-3 text-foreground"
          >
            {label}
          </label>
        )}
        <select
          id={name}
          ref={ref}
          name={name}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          onChange={handleChange}
          className={cn(
            "flex h-9 w-full min-w-0 rounded-md border border-border bg-input-background px-3 py-1 text-base shadow-xs",
            "transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
            "focus-visible:ring-[1px] focus-visible:border-ring focus-visible:ring-accent",
            "appearance-none pr-8",
            "[&_option]:bg-input-background [&_option]:text-foreground",
            error
              ? "border-error focus-visible:ring-error/50"
              : "focus-visible:ring-ring/50",
            className
          )}
          {...rest}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-input-background hover:bg-accent"
            >
              {option.label}
            </option>
          ))}
        </select>

        <div className="absolute right-3 top-1/2 translate-y-[4px] pointer-events-none">
          <ChevronDown
            size={24}
            className={cn(
              "text-muted transition-transform duration-200",
              isOpen ? "rotate-180" : "rotate-0"
            )}
          />
        </div>
        {error && <p className="mt-1 text-sm text-error">{error.message}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
