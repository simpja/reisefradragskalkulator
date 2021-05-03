import styles from "../styles/Travels.module.scss";
import { useState } from "react";
import { utgifterIsValid } from "../scripts/utils";

export default function Utgifter({ calculation, setCalculation }) {
  // Will keep track of validation error on user input for conditional rendering
  const [feilmelding, setFeilmelding] = useState(false);

  // Handles onChange of input field for calculation.utgifterBomFergeEtc
  //    Controlled component with validation
  const handleOnChange = (e) => {
    // Set value for easy ref.
    const utgifter = e.target.value;
    // Validate input
    if (!utgifterIsValid(utgifter)) {
      setFeilmelding(true);
      return;
    } else if (feilmelding === true) {
      setFeilmelding(false);
    }

    // Casts from text to number to avoid having pre-set value of 0 in input field
    setCalculation((prev) => ({
      ...prev,
      utgifterBomFergeEtc: Number(utgifter),
    }));
  };

  // Renders the Utgifter section with an input field for calculation.utgifterBomFergeEtc
  return (
    <section>
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
          {feilmelding && (
            <p className={styles.errorMessage_utgift}>Må være et tall</p>
          )}
        </label>
      </div>
    </section>
  );
}
