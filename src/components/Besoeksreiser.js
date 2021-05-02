import generateKey from "../scripts/generateKey";
import styles from "../styles/Arbeidsreiser.module.scss";
import BesoeksreiseElement from "./BesoeksreiseElement";

export default function Besoeksreiser({ calculation, setCalculation }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const besoeksreiserNew = {
      km: Number(e.currentTarget?.elements.km.value),
      antall: Number(e.currentTarget.elements.antall.value),
      key: generateKey("besoeksreise"),
      isEditing: false,
    };

    setCalculation((prev) => ({
      ...prev,
      besoeksreiser: [...prev.besoeksreiser, besoeksreiserNew],
    }));

    // Clear inputs
    e.currentTarget.elements.km.value = "";
    e.currentTarget.elements.antall.value = "";
  };

  const clearBesoeksreiser = () => {
    setCalculation((prev) => ({
      ...prev,
      besoeksreiser: [],
    }));
  };

  return (
    <section className={styles.arbeidsreiser}>
      <h3 className={styles.subform_title}>Besøksreiser</h3>

      <form
        autoComplete="off"
        className={styles.arbeidsreiser_form}
        onSubmit={handleOnSubmit}
      >
        <div className={styles.input_container}>
          <label>
            Lengde i km:
            <input name="km" type="text" />
          </label>
        </div>
        <div className={styles.input_container}>
          <label>
            Antall forekomster av denne reisen:
            <input name="antall" type="text" />
          </label>
        </div>
        <button>Add</button>
      </form>

      <ul className={styles.arbeidsreiser_list}>
        {calculation.besoeksreiser?.length > 0 &&
          calculation.besoeksreiser.map((item) => (
            <BesoeksreiseElement
              key={generateKey(`BesoeksreiseElement_${item.key}`)}
              calculation={calculation}
              setCalculation={setCalculation}
              besoeksreiseElement={item}
            />
          ))}
      </ul>

      <button onClick={clearBesoeksreiser}>Tøm listen over besøksreiser</button>
    </section>
  );
}
