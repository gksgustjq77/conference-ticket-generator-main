interface InputFormProps {
  title?: string;
  placeholder?: string;
}

const InputForm: React.FC<InputFormProps> = ({ title, placeholder }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md">
        {title && <p className="mb-2 text-md font-medium">{title}</p>}
        <input
          type="text"
          placeholder={placeholder}
          className="w-full text-white border border-[#6b6f88] rounded-[7px] bg-transparent bg-no-repeat h-[45px] px-3"
        ></input>
      </div>
    </div>
  );
};

export default InputForm;
