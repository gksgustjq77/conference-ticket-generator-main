export type JoinInputType = {
  title: string;
  formKey: string;
  placeholder: string;
  description: string;
};

export type JoinInputTypeArr = JoinInputType[];

export const joinInputArr: JoinInputTypeArr = [
  {
    title: "Full Name",
    formKey: "name",
    placeholder: "",
    description: "Please enter a valid Full Name.",
  },
  {
    title: "Email Address",
    formKey: "email",
    placeholder: "example@email.com",
    description: "Please enter a valid email address.",
  },
  {
    title: "GitHub Username",
    formKey: "username",
    placeholder: "@yourusername",
    description: "Please enter a valid Username",
  },
];

export const inputForm: Record<string, string | File> = {
  imgFile: "",
  name: "",
  email: "",
  username: "",
};
