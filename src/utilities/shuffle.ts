import CardType from "../shared/interfaces/card";

const shuffle = (): CardType[] => {
  const assets = [
    { image: "/assets/css.png" },
    { image: "/assets/html5.png" },
    { image: "/assets/jsx.png" },
    { image: "/assets/go.png" },
    { image: "/assets/firebase.png" },
    { image: "/assets/node.png" },
    { image: "/assets/react.png" },
    { image: "/assets/ts.png" },
  ];

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({
      ...card,
      id: Math.random(),
      selected: false,
      matched: false,
    }));
};

export default shuffle;
