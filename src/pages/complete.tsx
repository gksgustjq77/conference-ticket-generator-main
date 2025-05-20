import CongratsMessage from "../componets/CongratsMessage";
import Ticket from "../componets/Ticket";
import { useLocation } from "react-router-dom";

interface FormState {
  imgFile: File;
  name: string;
  email: string;
  username: string;
}

const Complete: React.FC = () => {
  // const location = useLocation();
  //const stateProps = location.state as FormState;

  const localData = JSON.parse(localStorage.getItem("user") || "") as FormState;
  return (
    <div className="">
      <CongratsMessage name={localData.name} email={localData.email} />
      <Ticket props={localData} />
    </div>
  );
};

export default Complete;
