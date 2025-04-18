import { ButtonType } from "@/types";

const Button = ({ label }: ButtonType) => {
  return (
    <button className="bg-blue-300 text-black cursor-pointer py-3 px-6 rounded-lg text-base hover:bg-blue-500 hover:text-gray-200 transition">
      {label}
    </button>
  );
};

export default Button;
