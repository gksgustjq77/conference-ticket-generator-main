export type JoinInputType = {
  title: string;
  placeholder: string;
};

export type JoinInputTypeArr = JoinInputType[];

export const joinInputArr: JoinInputTypeArr = [
  {
    title: "Full Name",
    placeholder: "",
  },
  {
    title: "Email Address",
    placeholder: "example@email.com",
  },
  {
    title: "GitHub Username",
    placeholder: "@yourusername",
  },
];
