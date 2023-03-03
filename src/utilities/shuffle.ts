import CardType from "../shared/interfaces/types";

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

  const cards = [...assets, ...assets].map((card) => ({
    ...card,
    id: Math.random(),
    selected: false,
    matched: false,
  }));

  // @ts-ignore
  return window.Cypress
    ? cards.sort((a, b) => a.image.localeCompare(b.image))
    : cards.sort(() => Math.random() - 0.5);
};

export default shuffle;
