import "./styles.css";

const EventForm = () => {
  return (
    <div className="container">
      <h1 className="title">Inscrição DIO Community</h1>
      <p className="subtitle">
        Preencha as informações abaixo para adquirir seu ingresso.
      </p>
      <form className="form">
        <input placeholder="Nome" />
        <input placeholder="CPF" maxLength={14} />
        <input placeholder="E-mail" />

        <select>
          <option value="" disabled selected>
            Tipo de ingresso
          </option>
          <option value="free">Gratuito</option>
          <option value="vip">VIP</option>
          <option value="premium">Premium</option>
        </select>

        <select>
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
            <input type="checkbox" /> Vegano
          </label>
          <label>
            <input type="checkbox" /> Vegetariano
          </label>
          <label>
            <input type="checkbox" /> Sem glúten
          </label>
        </div>

        <div className="divider" />

        <textarea placeholder="Comentários adicionais" />

        <button type="submit" className="button">
          Enviar Inscrição
        </button>
      </form>
    </div>
  );
};

export default EventForm;

