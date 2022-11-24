export const getRandomColor = (): string => {
  const colors: string[] = ["green", "red", "blue", "orange"];
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};
