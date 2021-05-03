import styles from "../styles/Travels.module.scss";
import { generateKey, reisePairIsValid } from "../scripts/utils";
import TravelElement from "./TravelElement";
import { useState } from "react";

export default function TravelList({
  calculation,
  setCalculation,
  name,
  title,
}) {
  // State "feilmelding" will keep track of validation error
  //    on user input for conditional rendering of error message
  const [feilmelding, setFeilmelding] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Set value of inputs to variables for ease of reference
    const km = e.currentTarget?.elements.km.value;
    const antall = e.currentTarget?.elements.antall.value;

    // Validate inputs
    if (!reisePairIsValid(km, antall)) {
      setFeilmelding(true);
      return;
    } else if (feilmelding === true) {
      setFeilmelding(false);
    }

    // Create a new element for corresponding state travel-type array
    //    input is cast to number to allow for input-type = text (avoiding arrows on number input)
    const travelsNew = {
      km: Number(km),
      antall: Number(antall),
      key: generateKey(name),
      isEditing: false,
    };

    // Update state
    setCalculation((prev) => ({
      ...prev,
      [name]: [...prev[name], travelsNew],
    }));

    // Clear input fields
    e.currentTarget.elements.km.value = "";
    e.currentTarget.elements.antall.value = "";
  };

  // Function to clear travel-type array in state
  const clearTravels = () => {
    setCalculation((prev) => ({
      ...prev,
      [name]: [],
    }));
  };

  // Render out the form to add elements of corresponding travel-type
  //    and present the list of already-made elements
  return (
    <section>
      <h3 className={styles.subform_title}>{title}</h3>

      <form
        autoComplete="off"
        className={styles.travel_form}
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
        {feilmelding && <p className={styles.errorMessage}>Ugyldige verdier</p>}
        <button>Legg til</button>
      </form>

      <ul className={styles.travel_list}>
        {calculation[name]?.length > 0 &&
          calculation[name].map((item) => (
            <TravelElement
              key={generateKey(`TravelListElement_${item.key}`)}
              calculation={calculation}
              setCalculation={setCalculation}
              travelElement={item}
              name={name}
              title={title}
            />
          ))}
      </ul>

      <button onClick={clearTravels}>
        Tøm listen over {title.toLowerCase()}
      </button>
    </section>
  );
}
