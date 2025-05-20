import { useState } from "react";

interface InputFormProps {
  title?: string;
  formKey: string;
  placeholder?: string;
  description?: string;
  onChange?: (value: string, key: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  title,
  formKey,
  placeholder,
  description,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onChange?.(value, formKey);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md">
        {title && <p className="mb-2 text-md font-medium">{title}</p>}
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          className={`w-full text-white border ${inputValue.trim() !== "" ? "border-[#6b6f88]" : "border-[hsl(7,71%,60%)]"} border-[#6b6f88] rounded-[7px] bg-transparent bg-no-repeat h-[45px] px-3`}
        ></input>
        {inputValue.trim() === "" && (
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                stroke={"hsl(7,71%,60%)"}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
              />
              <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
              <path
                stroke={"hsl(7,71%,60%)"}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.004 10.462V7.596M8 5.569v-.042"
              />
            </svg>
            <p className="text-xs text-[hsl(7,71%,60%)] ml-2">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputForm;
