import React from "react";
import JoinMsg from "../componets/JoinMsg";
import ImageUploader from "../componets/input/ImageUploader";
import InputForm from "../componets/input/InputForm";
import { joinInputArr, type JoinInputType } from "../type/joinType";
import Button from "../componets/button/Button";

const Join: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <JoinMsg></JoinMsg>
        <ImageUploader
          title={"Upload Avatar"}
          description={"Upload your photo (JPG or PNG, max size : 500kB."}
        ></ImageUploader>
        <div className="mb-5" />
        {joinInputArr.map((e: JoinInputType, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <InputForm
                title={e.title}
                placeholder={e.placeholder}
              ></InputForm>
              <div className="mb-5" />
            </React.Fragment>
          );
        })}
        <Button></Button>
      </div>
    </>
  );
};

export default Join;
