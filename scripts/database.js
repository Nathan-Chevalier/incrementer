const database = {
  incrementer: [
    {
      id: 1,
      name: "Click",
      multiplier: 1,
    },
    {
      id: 2,
      name: "First Auto",
      multiplier: 1,
    },
  ],
};

export const getCount = () => {
  return database.count;
};

export const getIncrementer = () => {
  return database.incrementer.map((increment) => ({ ...increment }));
};
