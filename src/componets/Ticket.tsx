import TicketSVG from "./TicketSVG";

interface Props {
  props: any;
}

const Ticket: React.FC<Props> = ({ props }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
      <TicketSVG props={props}></TicketSVG>
    </div>
  );
};

export default Ticket;
