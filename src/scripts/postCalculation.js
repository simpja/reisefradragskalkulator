export default async function postCalculation(data) {
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
