// Function to FetchScores From
export const fetchScores = async () => {
  const response = await fetch(gameURL);
  const data = await response.json();
  renderScores(data);
};

export default fetchScores;