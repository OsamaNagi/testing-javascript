const analyzeArray = (array) => {
  const sum = array.reduce((a, b) => a + b);

  const min = Math.min(...array);

  const max = Math.max(...array);

  const ave = sum / array.length;

  const length = array.length;

  const analyzedArray = {
    ave: ave,
    min: min,
    max: max,
    length: length,
  };

  return analyzedArray;
};

export default analyzeArray;
