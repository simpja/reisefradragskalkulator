import generateKey from "../scripts/generateKey";
import styles from "../styles/Arbeidsreiser.module.scss";

export default function ArbeidsreiseElement({
  calculation,
  setCalculation,
  arbeidsreiseElement,
}) {
  const deleteArbeidsreise = () => {
    const updatedArbeidsreiser = calculation.arbeidsreiser.filter(
      (item) => item.key !== arbeidsreiseElement.key
    );

    setCalculation((prev) => {
      return {
        ...prev,
        arbeidsreiser: [...updatedArbeidsreiser],
      };
    });
  };

  const setIsEditing = (toggleValue) => {
    const updatedArbeidsreiser = calculation.arbeidsreiser.map((item) => {
      if (item.key === arbeidsreiseElement.key) {
        return {
          ...item,
          isEditing: toggleValue,
        };
      } else {
        return item;
      }
    });

    setCalculation((prev) => {
      return {
        ...prev,
        arbeidsreiser: [...updatedArbeidsreiser],
      };
    });
  };

  const updateKm = (e) => {
    const updatedArbeidsreiser = calculation.arbeidsreiser.map((item) => {
      if (item.key === arbeidsreiseElement.key) {
        return {
          ...item,
          km: Number(e.target.value),
        };
      } else {
        return item;
      }
    });

    setCalculation((prev) => ({
      ...prev,
      arbeidsreiser: [...updatedArbeidsreiser],
    }));
  };

  const updateAntall = (e) => {
    const updatedArbeidsreiser = calculation.arbeidsreiser.map((item) => {
      if (item.key === arbeidsreiseElement.key) {
        return {
          ...item,
          antall: Number(e.target.value),
        };
      } else {
        return item;
      }
    });

    setCalculation((prev) => ({
      ...prev,
      arbeidsreiser: [...updatedArbeidsreiser],
    }));
  };

  return (
    <li key={generateKey(`${arbeidsreiseElement.key}_li`)}>
      {!arbeidsreiseElement.isEditing ? (
        <>
          <p>km: {arbeidsreiseElement.km}</p>
          <p>Antall: {arbeidsreiseElement.antall}</p>
          <button onClick={() => setIsEditing(true)}>Endre arbeidsreise</button>
        </>
      ) : (
        <>
          <div className={styles.input_container}>
            <label>
              Lengde i km:
              <input
                name="km"
                type="text"
                value={arbeidsreiseElement.km}
                onChange={updateKm}
              />
            </label>
          </div>
          <div className={styles.input_container}>
            <label>
              Antall forekomster av denne reisen:
              <input
                name="antall"
                type="text"
                value={arbeidsreiseElement.antall}
                onChange={updateAntall}
              />
            </label>
          </div>
          <button onClick={() => setIsEditing(false)}>Lagre</button>
        </>
      )}
      <button onClick={deleteArbeidsreise}>Slett</button>
    </li>
  );
}
