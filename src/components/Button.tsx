import { ButtonType } from "@/types";

const Button = ({ label, onClick, disabled }: ButtonType) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`style-btn ${disabled ? "cursor-text" : "cursor-pointer"}`}
    >
      {label}
    </button>
  );
};

export default Button;
