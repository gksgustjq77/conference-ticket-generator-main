import CongratsMessage from "../componets/CongratsMessage";
import Ticket from "../componets/Ticket";

interface FormState {
  imgFile: File;
  name: string;
  email: string;
  username: string;
}

const Complete: React.FC = () => {
  const localData = JSON.parse(localStorage.getItem("user") || "") as FormState;
  return (
    <div className="">
      <CongratsMessage name={localData.name} email={localData.email} />
      <Ticket props={localData} />
    </div>
  );
};

export default Complete;
