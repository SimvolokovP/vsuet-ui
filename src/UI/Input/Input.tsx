
import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: { message?: string };
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    name = "",
    label = "",
    className,
    error,
    type = "text",
    ...rest
  } = props;

  return (
    <div className="w-full">
      {label && label.length > 0 && (
        <label
          htmlFor={name}
          className="block text-sm font-medium mb-3 text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        ref={ref}
        name={name}
        type={type}
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary",
          "flex h-9 w-full min-w-0 rounded-md border border-border bg-input-background px-3 py-1 text-base shadow-xs",
          "transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
          "focus-visible:ring-[1px] focus-visible:border-ring focus-visible:ring-accent",
          error
            ? "border-error focus-visible:ring-error/50"
            : "focus-visible:ring-ring/50",
          className
        )}
        {...rest}
      />
      {error && <p className="mt-1 text-[12px] text-error">{error.message}</p>}
    </div>
  );
});

Input.displayName = "Input";
