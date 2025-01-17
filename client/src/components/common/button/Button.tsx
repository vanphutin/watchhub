import React, { ReactNode } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type,
  disabled,
  icon,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="icon">{icon}</span>
      {text}
    </button>
  );
};

export default Button;
