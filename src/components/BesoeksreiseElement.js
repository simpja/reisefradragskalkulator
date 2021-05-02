import generateKey from "../scripts/generateKey";
import styles from "../styles/Arbeidsreiser.module.scss";

export default function BesoeksreiseElement({
  calculation,
  setCalculation,
  besoeksreiseElement,
}) {
  const deleteBesoeksreise = () => {
    const updatedBesoeksreiser = calculation.besoeksreiser.filter(
      (item) => item.key !== besoeksreiseElement.key
    );

    setCalculation((prev) => {
      return {
        ...prev,
        besoeksreiser: [...updatedBesoeksreiser],
      };
    });
  };

  const setIsEditing = (toggleValue) => {
    const updatedBesoeksreiser = calculation.besoeksreiser.map((item) => {
      if (item.key === besoeksreiseElement.key) {
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
        besoeksreiser: [...updatedBesoeksreiser],
      };
    });
  };

  const updateKm = (e) => {
    const updatedBesoeksreiser = calculation.besoeksreiser.map((item) => {
      if (item.key === besoeksreiseElement.key) {
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
      besoeksreiser: [...updatedBesoeksreiser],
    }));
  };

  const updateAntall = (e) => {
    const updatedBesoeksreiser = calculation.besoeksreiser.map((item) => {
      if (item.key === besoeksreiseElement.key) {
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
      besoeksreiser: [...updatedBesoeksreiser],
    }));
  };

  return (
    <li key={generateKey(`${besoeksreiseElement.key}_li`)}>
      {!besoeksreiseElement.isEditing ? (
        <>
          <p>km: {besoeksreiseElement.km}</p>
          <p>Antall: {besoeksreiseElement.antall}</p>
          <button onClick={() => setIsEditing(true)}>Endre besoeksreise</button>
        </>
      ) : (
        <>
          <div className={styles.input_container}>
            <label>
              Lengde i km:
              <input
                name="km"
                type="text"
                value={besoeksreiseElement.km}
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
                value={besoeksreiseElement.antall}
                onChange={updateAntall}
              />
            </label>
          </div>
          <button onClick={() => setIsEditing(false)}>Lagre</button>
        </>
      )}
      <button onClick={deleteBesoeksreise}>Slett</button>
    </li>
  );
}
