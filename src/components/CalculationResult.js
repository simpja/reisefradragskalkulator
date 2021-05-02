export default function CalculationResult(calculationResult) {
  const resultat = calculationResult.calculationResult;

  if (resultat === 0) {
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
      <p>
        Reisefradragsberegningen din ble NOK:
        {resultat}
      </p>
    </section>
  );
}
