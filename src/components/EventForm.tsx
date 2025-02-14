import { useForm } from "react-hook-form";
import "./styles.css";

interface FormData {
  name: string;
  cpf: string;
  email: string;
  ticketType: "free" | "vip" | "premium";
  tshirtSize: "P" | "M" | "G" | "GG";
  food?: {
    vegan?: boolean;
    vegetarian?: boolean;
    glutenFree?: boolean;
  };
  comments?: string;
}

const EventForm = () => {
  const { register } = useForm<FormData>();

  return (
    <div className="container">
      <h1 className="title">Inscrição DIO Community</h1>
      <p className="subtitle">
        Preencha as informações abaixo para adquirir seu ingresso.
      </p>
      <form className="form">
        <input placeholder="Nome" {...register("name")} />
        <input placeholder="CPF" maxLength={14} {...register("cpf")} />
        <input placeholder="E-mail" type="email" {...register("email")} />

        <select {...register("ticketType")}>
          <option value="" disabled selected>
            Tipo de ingresso
          </option>
          <option value="free">Gratuito</option>
          <option value="vip">VIP</option>
          <option value="premium">Premium</option>
        </select>

        <select {...register("tshirtSize")}>
          <option value="" disabled selected>
            Tamanho da camiseta
          </option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>

        <div className="divider" />

        <label style={{ marginBottom: ".5rem" }}>
          Preferências Alimentares:
        </label>
        <div className="food-preferences">
          <label>
            <input type="checkbox" {...register("food.vegan")} /> Vegano
          </label>
          <label>
            <input type="checkbox" {...register("food.vegetarian")} />{" "}
            Vegetariano
          </label>
          <label>
            <input type="checkbox" {...register("food.glutenFree")} /> Sem
            glúten
          </label>
        </div>

        <div className="divider" />

        <textarea
          placeholder="Comentários adicionais"
          {...register("comments")}
        />

        <button type="submit" className="button">
          Enviar Inscrição
        </button>
      </form>
    </div>
  );
};

export default EventForm;

