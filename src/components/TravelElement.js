import styles from "../styles/Travels.module.scss";
import { generateKey, kmIsValid, antallIsValid } from "../scripts/utils";
import { useState } from "react";

export default function TravelElement({
  calculation,
  setCalculation,
  travelElement,
  name,
  title,
}) {
  // Will keep track of validation error on user input for conditional rendering
  const [feilmelding, setFeilmelding] = useState({ km: false, antall: false });

  // Function to delete a spesific travel-type element from
  //     corresponding travel-type array within calculation state
  const deleteTravel = () => {
    const updatedTravels = calculation[name].filter(
      (item) => item.key !== travelElement.key
    );

    setCalculation((prev) => {
      return {
        ...prev,
        [name]: [...updatedTravels],
      };
    });
  };

  // Function to toggle editing of spesific list element true/false
  const setIsEditing = (toggleValue) => {
    const updatedTravels = calculation[name].map((item) => {
      if (item.key === travelElement.key) {
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
        [name]: [...updatedTravels],
      };
    });
  };

  // Function to update km attribute of a travel-element
  //     Should be joined to one function together with updateAntall
  const updateKm = (e) => {
    // Set value for ease of reference
    const km = e.target.value;
    // Validate input
    if (!kmIsValid(km)) {
      setFeilmelding((prev) => {
        return {
          ...prev,
          km: true,
        };
      });
      return;
    }

    const updatedTravels = calculation[name].map((item) => {
      if (item.key === travelElement.key) {
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
      [name]: [...updatedTravels],
    }));
  };

  // Function to update antall attribute of a travel-element
  //     Should be joined to one function together with updateKm
  const updateAntall = (e) => {
    // Set value for easy ref.
    const antall = e.target.value;
    // Validate input
    if (!antallIsValid(antall)) {
      setFeilmelding((prev) => {
        return {
          ...prev,
          antall: true,
        };
      });
      return;
    }

    const updatedTravels = calculation[name].map((item) => {
      if (item.key === travelElement.key) {
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
      [name]: [...updatedTravels],
    }));
  };

  // Renders list elements of travel-type
  //    with possibility to update and delete
  return (
    <li key={generateKey(`${travelElement.key}_li`)}>
      {!travelElement.isEditing ? (
        <>
          <p>km: {travelElement.km}</p>
          <p>Antall: {travelElement.antall}</p>
          <button onClick={() => setIsEditing(true)}>
            Endre {title.toLowerCase().slice(0, -1)}
          </button>
        </>
      ) : (
        <>
          <div className={styles.input_container_li}>
            <label>
              km:
              <input
                name="km"
                type="text"
                value={travelElement.km}
                onChange={updateKm}
              />
            </label>
            {feilmelding.km && (
              <p className={styles.errorMessage_li}>
                Må være et tall større enn null
              </p>
            )}
          </div>
          <div className={styles.input_container_li}>
            <label>
              Antall:
              <input
                name="antall"
                type="text"
                value={travelElement.antall}
                onChange={updateAntall}
              />
            </label>
            {feilmelding.antall && (
              <p className={styles.errorMessage_li}>
                Må være et tall større enn null
              </p>
            )}
          </div>
          <button onClick={() => setIsEditing(false)}>Lagre</button>
        </>
      )}
      <button onClick={deleteTravel}>Slett</button>
    </li>
  );
}
