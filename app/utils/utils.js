export const joinGenres = (genres) => {
  const result = genres
    ?.slice(0, 3)
    .map((g) => g.name)
    .join(', ');
  return result;
};

export const minToHours = (num) => {
  if (num > 1) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    if (hours < 1) {
      return minutes + 'm';
    }
    return hours + 'h ' + minutes + 'm';
  }
};

export const getYear = (date) => {
  const result = date?.slice(0, 4);
  return result;
};
