import styles from "./styles/App.module.scss";
import TravelCalculator from "./components/TravelCalculator";
import CalculatorInfo from "./components/CalculatorInfo";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <h1>Reisefradragsberegning 💸</h1>
      </header>
      <main>
        <CalculatorInfo />
        <TravelCalculator />
      </main>
    </div>
  );
}

export default App;
