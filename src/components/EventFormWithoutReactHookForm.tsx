import React, { useState, ChangeEvent, FormEvent } from "react";
import "./styles.css";

interface FormData {
  name: string;
  cpf: string;
  email: string;
  ticketType: string;
  tshirtSize: string;
  food: {
    vegan: boolean;
    vegetarian: boolean;
    glutenFree: boolean;
  };
  comments: string;
}

interface Errors {
  name?: string;
  cpf?: string;
  email?: string;
  ticketType?: string;
  tshirtSize?: string;
}

const EventFormWithoutReactHookForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cpf: "",
    email: "",
    ticketType: "",
    tshirtSize: "",
    food: {
      vegan: false,
      vegetarian: false,
      glutenFree: false,
    },
    comments: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        food: { ...prev.food, [name]: (e.target as HTMLInputElement).checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "O nome deve ter no mínimo 3 caracteres";
    }

    if (!formData.cpf.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      newErrors.cpf = "Formato de CPF inválido";
    }

    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      newErrors.email = "Formato de e-mail inválido";
    }

    if (!formData.ticketType) {
      newErrors.ticketType = "Selecione um tipo de ingresso";
    }

    if (!formData.tshirtSize) {
      newErrors.tshirtSize = "Escolha um tamanho";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Dados enviados:", formData);
      alert("Inscrição realizada com sucesso!");
    }
  };

  console.log("EventFormWithoutReactHookForm rendered.");

  return (
    <div className="container">
      <h1 className="title">Inscrição DIO Community</h1>
      <p className="subtitle">
        Preencha as informações abaixo para adquirir seu ingresso.
      </p>
      <p
        className="subtitle"
        style={{
          border: "1px solid gold",
          borderRadius: 8,
          backgroundColor: "lightyellow",
          padding: "1rem",
        }}
      >
        ❌ Sem React Hook Form.
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          className={errors.name ? "field-with-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="CPF"
          className={errors.cpf ? "field-with-error" : ""}
        />
        {errors.cpf && <p className="error">{errors.cpf}</p>}

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className={errors.email ? "field-with-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <select
          name="ticketType"
          value={formData.ticketType}
          onChange={handleChange}
        >
          <option value="">Tipo de ingresso</option>
          <option value="free">Gratuito</option>
          <option value="vip">VIP</option>
          <option value="premium">Premium</option>
        </select>
        {errors.ticketType && <p className="error">{errors.ticketType}</p>}

        <select
          name="tshirtSize"
          value={formData.tshirtSize}
          onChange={handleChange}
        >
          <option value="">Tamanho da camiseta</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </select>
        {errors.tshirtSize && <p className="error">{errors.tshirtSize}</p>}

        <div className="divider" />

        <label style={{ marginBottom: ".5rem" }}>
          Preferências Alimentares:
        </label>
        <div className="food-preferences">
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={formData.food.vegan}
              onChange={handleChange}
            />{" "}
            Vegano
          </label>
          <label>
            <input
              type="checkbox"
              name="vegetarian"
              checked={formData.food.vegetarian}
              onChange={handleChange}
            />{" "}
            Vegetariano
          </label>
          <label>
            <input
              type="checkbox"
              name="glutenFree"
              checked={formData.food.glutenFree}
              onChange={handleChange}
            />{" "}
            Sem glúten
          </label>
        </div>

        <div className="divider" />

        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Comentários adicionais"
        />

        <button type="submit" className="button">
          Enviar Inscrição
        </button>
      </form>
    </div>
  );
};

export default EventFormWithoutReactHookForm;

