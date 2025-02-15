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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert("Inscrição realizada com sucesso!");
  };

  console.log("EventForm rendered.");

  return (
    <div className="container">
      <h1 className="title">Inscrição DIO Community</h1>
      <p className="subtitle">
        Preencha as informações abaixo para adquirir seu ingresso.
      </p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={errors.name ? "field-with-error" : ""}
          placeholder="Nome"
          {...register("name", {
            required: "O nome é obrigatório",
            minLength: {
              value: 3,
              message: "Mínimo de 3 caracteres",
            },
          })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          placeholder="CPF"
          className={errors.cpf ? "field-with-error" : ""}
          {...register("cpf", {
            required: "O CPF é obrigatório",
            maxLength: {
              value: 14,
              message: "Máximo de 14 caracteres",
            },
            pattern: {
              value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
              message: "Formato de CPF inválido",
            },
          })}
        />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}

        <input
          placeholder="E-mail"
          className={errors.email ? "field-with-error" : ""}
          {...register("email", {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Formato de e-mail inválido",
            },
          })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <select
          defaultValue=""
          className={errors.ticketType ? "field-with-error" : ""}
          {...register("ticketType", {
            required: "Selecione um tipo de ingresso",
          })}
        >
          <option value="" disabled>
            Tipo de ingresso
          </option>
          <option value="free">Gratuito</option>
          <option value="vip">VIP</option>
          <option value="premium">Premium</option>
        </select>
        {errors.ticketType && (
          <p className="error">{errors.ticketType.message}</p>
        )}

        <select
          defaultValue=""
          className={errors.tshirtSize ? "field-with-error" : ""}
          {...register("tshirtSize", {
            required: "Escolha um tamanho",
          })}
        >
          <option value="" disabled>
            Tamanho da camiseta
          </option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
        {errors.tshirtSize && (
          <p className="error">{errors.tshirtSize.message}</p>
        )}

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

