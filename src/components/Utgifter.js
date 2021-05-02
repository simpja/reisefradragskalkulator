import styles from "../styles/Arbeidsreiser.module.scss";

export default function Utgifter({ calculation, setCalculation }) {
  const handleOnChange = (e) => {
    setCalculation((prev) => ({
      ...prev,
      utgifterBomFergeEtc: Number(e.target.value),
    }));
  };

  return (
    <section className={styles.arbeidsreiser}>
      <h3 className={styles.subform_title}>Utgifter</h3>
      <div className={styles.input_container}>
        <label>
          Sum av utgifter for bom, ferge, etc...
          <input
            autoComplete="off"
            name="utgifter"
            type="text"
            value={calculation.utgifterBomFergeEtc}
            onChange={handleOnChange}
          />
        </label>
      </div>
    </section>
  );
}
