import styles from "../styles/TravelCalculator.module.scss";
import { useState } from "react";
import Arbeidsreiser from "./Arbeidsreiser";
import Besoeksreiser from "./Besoeksreiser";
import Utgifter from "./Utgifter";
import postCalculation from "../scripts/postCalculation";
import CalculationResult from "./CalculationResult";

export default function TravelCalculator() {
  const initialCalculation = {
    arbeidsreiser: [],
    besoeksreiser: [],
    utgifterBomFergeEtc: "",
  };
  const initialCalculationResult = -1;

  const [calculation, setCalculation] = useState(initialCalculation);
  const [calculationResult, setCalculationResult] = useState(
    initialCalculationResult
  );

  const handleOnSubmit = () => {
    // Make an empty object on the correct form of API body
    const calculationForAPI = {
      arbeidsreiser: [],
      besoeksreiser: [],
      utgifterBomFergeEtc: 0,
    };

    // Map attributes from the arbeidsreiser array
    calculationForAPI.arbeidsreiser = calculation.arbeidsreiser.map(
      ({ key, isEditing, ...stripped }) => stripped
    );

    // Map attributes from the besoeksreiser array
    calculationForAPI.besoeksreiser = calculation.besoeksreiser.map(
      ({ key, isEditing, ...stripped }) => stripped
    );

    // calculation.utgifterBomFergeEtc is initially set to an empty string-
    // to keep its related input field empty. API takes only 0 as a valid "empty" value
    if (calculation.utgifterBomFergeEtc === "") {
      calculationForAPI.utgifterBomFergeEtc = 0;
    } else {
      calculationForAPI.utgifterBomFergeEtc = calculation.utgifterBomFergeEtc;
    }

    postCalculation(calculationForAPI)
      .then((response) => {
        setCalculationResult(response.reisefradrag);
      })
      .catch((error) => {
        alert("Her har det skjedd en feil!");
        console.log(error);
      });
  };

  const clearCalculation = () => {
    setCalculation(initialCalculation);
    setCalculationResult(initialCalculationResult);
  };

  return (
    <>
      <div className={styles.TravelCalculator} key="keykey">
        <Arbeidsreiser
          calculation={calculation}
          setCalculation={setCalculation}
        />
        <Besoeksreiser
          calculation={calculation}
          setCalculation={setCalculation}
        />

        <Utgifter calculation={calculation} setCalculation={setCalculation} />

        <section className={styles.horizontal_button_group}>
          <button onClick={handleOnSubmit}>Kalkuler</button>
          <button onClick={clearCalculation}>Start med blanke ark</button>
        </section>

        {calculationResult >= 0 && (
          <CalculationResult calculationResult={calculationResult} />
        )}
      </div>
    </>
  );
}
