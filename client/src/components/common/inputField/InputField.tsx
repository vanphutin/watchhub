import React from "react";
import Form from "react-bootstrap/Form";
import "./_inputField.scss";
type Size = "sm" | "lg";

interface Props {
  className?: string;
  label?: string;
  size?: Size | undefined;
  type: string;
  placeholder: string;
  name: string;
  disabled?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const InputField: React.FC<Props> = ({
  className,
  label,
  size,
  type,
  placeholder,
  name,
  value,
  onChange,
  disabled,
  ref,
}) => {
  return (
    <>
      <Form.Group className={`input-group mb-3 ${className}`}>
        <div style={{ width: "100%" }}>
          <Form.Label>{label}</Form.Label>
        </div>
        <Form.Control
          ref={ref}
          size={size}
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </Form.Group>
    </>
  );
};

export default InputField;
