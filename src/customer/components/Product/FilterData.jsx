export const color = [
  "White",
  "Black",
  "Red",
  "Beige",
  "Maroon",
  "Pink",
  "Green",
  "Yellow",
];
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "beige", label: "Beige" },
      { value: "maroon", label: "Maroon" },
      { value: "pink", label: "Pink" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "99-199", label: "₹99 to ₹199" },
      { value: "199-299", label: "₹199 to ₹299" },
      { value: "299-499", label: "₹299 to ₹499" },
      { value: "499-699", label: "₹499 to ₹699" },
      { value: "699-899", label: "₹699 to ₹899" },
      { value: "899-999", label: "₹899 to ₹999" },
      { value: "above_999", label: "Above ₹999" },
    ],
  },
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "50", label: "50% and above" },
      { value: "60", label: "60% and above" },
      { value: "70", label: "70% and above" },
      { value: "80", label: "80% and above" },
      { value: "90", label: "90% and above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in-stock", label: "In stock" },
      { value: "out-stock", label: "Out of stock" },
    ],
  },
];
