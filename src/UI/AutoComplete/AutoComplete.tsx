
import { ChevronDown, X } from "lucide-react";
import { forwardRef, useState, useRef, useEffect, type KeyboardEvent } from "react";
import { cn } from "../../utils/cn";

interface AutoCompleteProps {
  name: string;
  label?: string;
  error?: { message?: string };
  options: { value: string; label: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  required?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

export const AutoComplete = forwardRef<HTMLInputElement, AutoCompleteProps>(
  (props, ref) => {
    const {
      name,
      label = "",
      error,
      options = [],
      placeholder = "",
      value = "",
      onChange,
      className,
      required = false,
      isLoading,
      disabled,
    } = props;

    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<{
      value: string;
      label: string;
    } | null>(null);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const wrapperRef = useRef<HTMLDivElement>(null);
    // const inputRef = useRef<HTMLInputElement>(null);

    const [dropdownDirection, setDropdownDirection] = useState<
      "bottom" | "top"
    >("bottom");

    useEffect(() => {
      if (wrapperRef.current && isOpen) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < 200 && spaceAbove > 200) {
          setDropdownDirection("top");
        } else {
          setDropdownDirection("bottom");
        }
      }
    }, [isOpen]);

    useEffect(() => {
      if (!value) {
        setSelectedOption(null);
        setInputValue("");
      }
    }, [value]);

    useEffect(() => {
      if (value) {
        const option = options.find((opt) => opt.value === value);
        if (option) {
          setSelectedOption(option);
          setInputValue(option.label);
        }
      }
    }, [value, options]);

    useEffect(() => {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }, [inputValue, options]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: { value: string; label: string }) => {
      setSelectedOption(option);
      setInputValue(option.label);
      onChange?.(option.value);
      setIsOpen(false);
    };

    const handleClear = () => {
      setSelectedOption(null);
      setInputValue("");
      onChange?.("");
      setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    return (
      <div className="relative" ref={wrapperRef}>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium mb-3 text-foreground"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            id={name}
            ref={ref}
            name={name}
            required={required}
            value={isLoading ? "Загрузка.." : inputValue}
            disabled={disabled || isLoading}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={cn(
              "flex h-9 w-full min-w-0 rounded-md border border-border bg-input-background px-3 py-1 text-base shadow-xs",
              "transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
              "focus-visible:ring-[1px] focus-visible:border-ring focus-visible:ring-accent",
              "pr-8",
              error
                ? "border-error focus-visible:ring-error/50"
                : "focus-visible:ring-ring/50",
              className
            )}
          />

          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
            {selectedOption && (
              <button
                type="button"
                onClick={handleClear}
                className="text-muted hover:text-foreground"
              >
                <X size={16} />
              </button>
            )}
            <ChevronDown
              size={24}
              className={cn(
                "text-muted transition-transform duration-200",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </div>
        </div>

        {isOpen && filteredOptions.length > 0 && (
          <ul
            className={cn(
              "absolute z-50 w-full max-h-32 overflow-y-auto rounded-md border border-border shadow-lg bg-input-background",
              dropdownDirection === "top"
                ? "bottom-full mb-1"
                : "top-full mt-0.5"
            )}
          >
            {filteredOptions.map((option, idx) => (
              <li
                key={option.value + idx}
                onClick={() => handleSelect(option)}
                className={cn(
                  "px-3 text-base py-2 cursor-pointer hover:bg-accent",
                  selectedOption?.value === option.value
                    ? "bg-accent/80"
                    : "bg-input-background"
                )}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}

        {isOpen && !filteredOptions.length && (
          <div className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-md border border-border shadow-lg">
            <div
              className={cn("px-3 py-2 hover:bg-accent, bg-input-background")}
            >
              Не найдено
            </div>
          </div>
        )}

        {error && <p className="mt-1 text-sm text-error">{error.message}</p>}
      </div>
    );
  }
);

AutoComplete.displayName = "AutoComplete";
