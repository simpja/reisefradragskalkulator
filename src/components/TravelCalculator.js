import { useState } from "react";
import TravelList from "./TravelList";
import Utgifter from "./Utgifter";
import { postCalculation } from "../scripts/utils";
import CalculationResult from "./CalculationResult";

export default function TravelCalculator() {
  // Consts for initializing and resetting states
  const initialCalculation = {
    arbeidsreiser: [],
    besoeksreiser: [],
    utgifterBomFergeEtc: "",
  };
  const initialCalculationResult = -1;

  // State "calculation" holds user inputs that will
  //    be parsed and passed to the API, which in turn
  //    returns a result saved in the state object "calculationResult"
  const [calculation, setCalculation] = useState(initialCalculation);
  const [calculationResult, setCalculationResult] = useState(
    initialCalculationResult
  );

  // Handles submitting of calculation on button press
  const handleOnSubmit = () => {
    // Object to hold body of API call
    const calculationForAPI = {
      arbeidsreiser: [],
      besoeksreiser: [],
      utgifterBomFergeEtc: 0,
    };

    // Map attributes from arbeidsreiser, besoeksreiser, and
    //    utgifter from state object calculation
    calculationForAPI.arbeidsreiser = calculation.arbeidsreiser.map(
      ({ key, isEditing, ...stripped }) => stripped
    );
    calculationForAPI.besoeksreiser = calculation.besoeksreiser.map(
      ({ key, isEditing, ...stripped }) => stripped
    );
    // calculation.utgifterBomFergeEtc is initially set to an empty string-
    // to keep its related input field empty. API accepts only 0 as a valid "empty" value
    if (calculation.utgifterBomFergeEtc === "") {
      calculationForAPI.utgifterBomFergeEtc = 0;
    } else {
      calculationForAPI.utgifterBomFergeEtc = calculation.utgifterBomFergeEtc;
    }

    postCalculation(calculationForAPI)
      .then((response) => {
        setCalculationResult(response.reisefradrag);
        // Scroll down on page to display result
        window.scrollBy(0, 400);
      })
      .catch((error) => {
        alert("Her har det skjedd en feil!");
        console.log(error);
      });
  };

  // Function to clear states
  // Used to reset the form
  const clearCalculation = () => {
    setCalculation(initialCalculation);
    setCalculationResult(initialCalculationResult);
  };

  return (
    <>
      <div key="keykey">
        <TravelList
          calculation={calculation}
          setCalculation={setCalculation}
          name={"arbeidsreiser"}
          title={"Arbeidsreiser"}
        />

        <TravelList
          calculation={calculation}
          setCalculation={setCalculation}
          name={"besoeksreiser"}
          title={"Besøksreiser"}
        />

        <Utgifter calculation={calculation} setCalculation={setCalculation} />

        <section>
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
