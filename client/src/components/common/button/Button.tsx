import React, { ReactNode } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  disabled,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
