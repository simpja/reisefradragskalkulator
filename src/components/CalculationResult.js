import styles from "../styles/Travels.module.scss";

export default function CalculationResult(calculationResult) {
  // Renders conditional outputs for the user depending on result of calculation
  if (calculationResult.calculationResult === 0) {
    return (
      <section>
        <h3>Resultat</h3>
        <p>Du får ingen reisefradrag for gjeldende reiser og utgifter.</p>
      </section>
    );
  }
  return (
    <section>
      <h3>Resultat</h3>
      <p>Din reisefradragsberegning ble beregnet til:</p>
      <p
        className={styles.resultDisplay}
      >{`${calculationResult.calculationResult},-`}</p>
    </section>
  );
}
