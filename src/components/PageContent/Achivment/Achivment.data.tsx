type AchivmentType = {
  src: string;
  alt: string;
  price: number;
};

const allAchivment = (): AchivmentType[] => [
  { src: '/icons/farmer.svg', alt: 'farmer', price: 0 },
  { src: '/icons/aristocrat.svg', alt: 'aristocrat', price: 30 },
  { src: '/icons/knight.svg', alt: 'knight', price: 70 },
  { src: '/icons/prince.svg', alt: 'prince', price: 100 },
  { src: '/icons/king.svg', alt: 'king', price: 140 },
];

export { allAchivment };
