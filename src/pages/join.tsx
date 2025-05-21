import React, { useState } from "react";
import JoinMsg from "../componets/JoinMsg";
import ImageUploader from "../componets/input/ImageUploader";
import InputForm from "../componets/input/InputForm";
import { inputForm, joinInputArr, type JoinInputType } from "../type/joinType";
import Button from "../componets/button/Button";
import { useNavigate } from "react-router-dom";

const Join: React.FC = () => {
  const [formData, setFormData] =
    useState<Record<string, string | File>>(inputForm);
  const navigate = useNavigate();

  const handleChangeInfo = (value: string | File, formKey: string) => {
    setFormData((prev) => ({
      ...prev,
      [formKey]: value,
    }));
  };

  const handleSUbmitNext = () => {
    console.log(formData);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      typeof formData.email !== "string" ||
      !emailRegex.test(formData.email)
    ) {
      //  alert("유효한 이메일 주소를 입력해주세요.");
      return;
    }

    for (const [_, value] of Object.entries(formData)) {
      if (typeof value === "string" && value.trim() === "") {
        return;
      }
    }
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/complete", {
      state: formData,
    });
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <JoinMsg></JoinMsg>
        <ImageUploader
          title={"Upload Avatar"}
          formKey="imgFile"
          onChange={handleChangeInfo}
        ></ImageUploader>
        <div className="mb-5" />
        {joinInputArr.map((e: JoinInputType, idx: number) => {
          return (
            <React.Fragment key={idx}>
              <InputForm
                title={e.title}
                formKey={e.formKey}
                placeholder={e.placeholder}
                description={e.description}
                onChange={handleChangeInfo}
              ></InputForm>
              <div className="mb-5" />
            </React.Fragment>
          );
        })}
        <Button onClick={handleSUbmitNext}></Button>
      </div>
    </>
  );
};

export default Join;
