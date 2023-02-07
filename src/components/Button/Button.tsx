import clsx from "clsx";
import type { MouseEventHandler, ReactElement } from "react";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  fullWidth?: boolean;
  id?: string;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  submit?: boolean;
  text?: string;
  variant?: ButtonVariant;
}

const Button = ({
  fullWidth = false,
  isDisabled = false,
  submit = false,
  className,
  id,
  onClick,
  text,
  variant = "primary",
}: ButtonProperties): ReactElement => (
  <button
    disabled={isDisabled}
    id={id}
    onClick={onClick}
    type={submit ? "submit" : "button"}
    className={clsx(
      "flex items-center justify-center rounded-xl font-semibold transition-all",
      {
        "bg-blue-700 border-[#000] border-2 text-white": variant === "primary",
        "text-red border-secondary border-2 bg-white": variant === "secondary",
        "block w-full": fullWidth,
        "opacity-50": isDisabled,
      },
      className
    )}
  >
    <span>{text}</span>
  </button>
);

export default Button;
