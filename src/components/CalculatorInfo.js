import styles from "../styles/CalculatorInfo.module.scss";

export default function CalculatorInfo() {
  return (
    <section className={styles.info}>
      <h3>Reisefradraget beregnes som følger</h3>
      <p>
        Totalt antall kilometer beregnes for alle arbeids- og besøksreiser. Øvre
        grense er 75 000 kilometer
      </p>
      <p>
        Det gis kr 1,50/km i fradrag for reiser opp til 50 000 km, deretter 0,70
        kr opp til 75 000 km
      </p>
      <p>
        Hvis utgifter til bom, ferge etc. overstiger kr 3 400 så gis hele
        beløpet i fradrag, ellers gis ingenting
      </p>
      <p>
        Fra summen av kilometerfradraget og utgifter til bom, ferge etc. trekkes
        fra en egenandel på kr 22 000.
      </p>
      <p>Resten er reisefradraget.</p>
    </section>
  );
}
