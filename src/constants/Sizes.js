export const SIZES = [
  {
    name: "S",
  },
  {
    name: "XS",
  },
  {
    name: "M",
  },
  {
    name: "L",
  },
  {
    name: "XL",
  },
  {
    name: "XXL",
  },
];

export const ID_ADMIN = "618ab307528dab25eacc5797";

export const KEY =
  "pk_test_51JlctbApXpVsSsVNRNRBjIGqDulvf5eKBxD0ka6d8yM7mQ4GtjzOoo7mCcf3vz6I0FOfkJooo5iaqaTtW2SAEhpo00USLb1Txj";

export const view = [255, 80]; // ViewBox: Width, Height
export const trbl = [10, 20, 10, 20]; // Margins: Top, Right, Bottom, Left

export const dims = [
  view[0] - trbl[1] - trbl[3], // Adjusted dimensions width
  view[1] - trbl[0] - trbl[2], // Adjusted dimensions height
];
