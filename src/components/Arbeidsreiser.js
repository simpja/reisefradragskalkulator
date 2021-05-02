import styles from "../styles/Arbeidsreiser.module.scss";
import generateKey from "../scripts/generateKey";
import ArbeidsreiseElement from "./ArbeidsreiseElement";

export default function Arbeidsreiser({ calculation, setCalculation }) {
  // Adds a new arbeidsreiseElement to the calculation.arbeidsreise array
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const arbeidsreiserNew = {
      km: Number(e.currentTarget?.elements.km.value),
      antall: Number(e.currentTarget?.elements.antall.value),
      key: generateKey("arbeidsreise"),
      isEditing: false,
    };

    setCalculation((prev) => ({
      ...prev,
      arbeidsreiser: [...prev.arbeidsreiser, arbeidsreiserNew],
    }));

    // Clear inputs
    e.currentTarget.elements.km.value = "";
    e.currentTarget.elements.antall.value = "";
  };

  // Clears the entire list of arbeidsreiseElements
  const clearArbeidsreiser = () => {
    setCalculation((prev) => ({
      ...prev,
      arbeidsreiser: [],
    }));
  };

  return (
    <section className={styles.arbeidsreiser}>
      <h3 className={styles.subform_title}>Arbeidsreiser</h3>

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
        {calculation.arbeidsreiser?.length > 0 &&
          calculation.arbeidsreiser.map((item) => (
            <ArbeidsreiseElement
              key={generateKey(`${item.key}_arbeidsreiseElement`)}
              arbeidsreiseElement={item}
              calculation={calculation}
              setCalculation={setCalculation}
            />
          ))}
      </ul>

      <button onClick={clearArbeidsreiser}>
        Tøm listen over arbeidsreiser
      </button>
    </section>
  );
}
