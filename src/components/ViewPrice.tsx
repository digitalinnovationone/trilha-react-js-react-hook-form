import "./styles.css";
import { FormData } from "./EventForm";
import { Control, useWatch } from "react-hook-form";

const ticketPrices: Record<FormData["ticketType"], string> = {
  free: "R$ 0,00",
  vip: "R$ 100,00",
  premium: "R$ 250,00",
};

interface Props {
  form: Control<FormData>;
}

const ViewPrice: React.FC<Props> = ({ form }) => {
  const ticketType = useWatch({
    control: form,
    name: "ticketType",
  });

  if (!ticketType) {
    return null;
  }

  return (
    <p className="ticket-price">
      🎟️ Preço do ingresso: {ticketPrices[ticketType]}
    </p>
  );
};

export default ViewPrice;

