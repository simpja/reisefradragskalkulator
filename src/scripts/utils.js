export async function postCalculation(data) {
  const url =
    "https://9f22opit6e.execute-api.us-east-2.amazonaws.com/default/reisefradrag";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export function reisePairIsValid(km, antall) {
  //return erTall(km) && km > 0 && erTall(antall) && antall > 0;
  return kmIsValid(km) && antallIsValid(antall);
}

export function kmIsValid(km) {
  return erTall(km) && km > 0;
}

export function antallIsValid(antall) {
  return erTall(antall) && antall > 0;
}

export function utgifterIsValid(utgift) {
  return erTall(utgift) || utgift === "";
}

function erTall(value) {
  return !isNaN(value);
}

export function generateKey(prefix) {
  const stamp = new Date().getTime();
  return prefix + "_" + stamp;
}
