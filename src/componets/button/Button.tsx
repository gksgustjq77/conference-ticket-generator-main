const Button: React.FC = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-md bg-[hsl(7,71%,60%)] rounded-[7px] ">
        <button className="w-full text-white bg-transparent bg-no-repeat h-[45px] px-3">
          <p className="font-bold text-[hsl(248,70%,10%)]">
            Generate My Ticket
          </p>
        </button>
      </div>
    </div>
  );
};

export default Button;
