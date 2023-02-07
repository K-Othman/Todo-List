import { forwardRef } from "react";
import clsx from "clsx";

type InputType = "text" | "password";

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  className?: string;
  disabled?: boolean;
  error?: boolean;
  id: string;
  name: string;
  placeholder?: string;
  type: InputType;
  value?: string;
};

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      name,
      placeholder,
      type,
      value,
      ...rest
    }: InputProps,
    ref
  ): JSX.Element => {
    return (
      <input
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        ref={ref}
        value={value}
        {...rest}
        className={clsx(
          "placeholder:text-gray-700 text-black h-[56px] rounded-lg transition-colors focus:outline-none focus:ring-1",
          {
            "border-gray-400 border bg-white": !error,
            "border-[#FF0000] border-[1px] bg-white caret-red-100 focus:ring-red-100":
              error,
            "opacity-40": disabled,
          },
          className
        )}
      />
    );
  }
);

export default Input;
