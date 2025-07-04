import React from "react";

interface CongratsMessageProps {
  name: string;
  email: string;
}

const CongratsMessage: React.FC<CongratsMessageProps> = ({ name, email }) => {
  return (
    <div className="flex items-center justify-center mb-[100px] flex-col">
      <div className="flex">
        <p className="text-center leading-tight font-bold mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Congrate,&nbsp;
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)]">
          {name}!
        </p>
      </div>
      <p className="text-center leading-tight font-bold mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-[5px]">
        Your ticket is ready.
      </p>
      <div className="flex flex-col text-[hsl(245,15%,58%)] mt-[25px]">
        <p>We've emailed your ticket to</p>
        <div className="flex">
          <p className="text-[hsl(7,71%,60%)]">{email}</p>&nbsp;
          <p>and will send updates in</p>
        </div>
        <p>the run up to the event.</p>
      </div>
    </div>
  );
};

export default CongratsMessage;
