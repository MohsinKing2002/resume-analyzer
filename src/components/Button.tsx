import { ButtonType } from "@/types";

const Button = ({ label, onClick }: ButtonType) => {
  return (
    <button onClick={onClick} className="style-btn">
      {label}
    </button>
  );
};

export default Button;
