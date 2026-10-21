import heroBg from "@/assets/hero-bg.jpg";

export interface SpecGroup {
  label: string;
  values: string[];
}

export interface UsageImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProductData {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  description: string;
  specs: string[];
  specGroups: SpecGroup[];
  gallery: { src: string; alt: string }[];
  usageImages: UsageImage[];
  specImage: string;
  careNotes: string[];
  craftNote: string;
}

export const products: Record<string, ProductData> = {
  "flora-pitcher": {
    id: "flora-pitcher",
    name: "Sesame Oil",
    subtitle: "A pantry essential",
    price: "$185",
    description:
      "A versatile oil with the unmistakable character of sesame. Add depth to dressings, marinades, dipping sauces, noodles and everyday meals. A little can bring a distinctive nutty note to a finished dish.",
    specs: [
      "Made from sesame seeds",
      "Distinctive sesame flavour",
      "Suitable for dressings and marinades",
      "Use in sauces, noodles and rice dishes",
      "Check the bottle label for volume and nutritional information",
      "Contains sesame",
    ],
    specGroups: [
      { label: "Product", values: ["Sesame oil", "For culinary use"] },
      { label: "Flavour", values: ["Distinctive sesame character", "Nutty notes"] },
      { label: "Ways to enjoy", values: ["Dressings and dipping sauces", "Marinades and finished dishes"] },
      { label: "Ingredients & allergens", values: ["Contains sesame", "Refer to the bottle label for the complete ingredient list"] },
      { label: "Bottle information", values: ["Refer to the label for volume, origin and best-before date"] },
      { label: "Storage", values: ["Keep tightly closed", "Store away from heat and direct sunlight"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Sesame oil product image" },
      { src: heroBg, alt: "Sesame oil close-up" },
      { src: heroBg, alt: "Sesame oil packaging detail" },
      { src: heroBg, alt: "Sesame oil serving inspiration" },
    ],
    usageImages: [
      { src: heroBg, alt: "Sesame oil serving suggestion", caption: "A finishing touch for everyday meals" },
      { src: heroBg, alt: "Sesame oil in the kitchen", caption: "Made for the moments around the table" },
    ],
    careNotes: [
      "Contains sesame — check allergen information before use",
      "Keep the bottle tightly closed after opening",
      "Follow the storage instructions on the label",
    ],
    craftNote: "From quick weekday cooking to a carefully prepared meal\\nA familiar ingredient with a distinctive flavour",
  },
  "moss-vase": {
    id: "moss-vase",
    name: "Koke Vase",
    subtitle: "苔 · Ash Glaze",
    price: "$145",
    description:
      "A quiet form for holding a single branch or ikebana arrangement. The ash glaze is made from wood ash collected after each noborigama firing, creating a surface that shifts between moss green and amber. Coil-built by Kenji over several days.",
    specs: [
      "Arita stoneware clay",
      "Wood ash glaze",
      "Coil-built by hand",
      "Noborigama fired at 1300°C",
      "Watertight interior",
      "Height: 28cm",
      "Opening: 8cm diameter",
    ],
    specGroups: [
      { label: "Clay", values: ["Arita stoneware", "Coil-built by Kenji"] },
      { label: "Glaze", values: ["Wood ash", "From our noborigama"] },
      { label: "Dimensions", values: ["28cm height", "8cm opening"] },
      { label: "Weight", values: ["620g"] },
      { label: "Use", values: ["Watertight", "Fresh or dried flowers"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Koke Vase front view" },
      { src: heroBg, alt: "Koke Vase glaze detail" },
      { src: heroBg, alt: "Koke Vase with dried branches" },
      { src: heroBg, alt: "Koke Vase from above" },
    ],
    usageImages: [
      { src: heroBg, alt: "Koke Vase with flowers", caption: "A single stem is enough" },
      { src: heroBg, alt: "Koke Vase surface detail", caption: "Ash glaze in morning light" },
    ],
    careNotes: [
      "Hand wash only",
      "Dry thoroughly after emptying water",
      "Glaze may develop patina over time — this is intentional",
    ],
    craftNote: "Coil-built by Kenji over three days\nWood ash from our own noborigama",
  },
  "ember-cup-set": {
    id: "ember-cup-set",
    name: "Hi Cup Set",
    subtitle: "火 · Tenmoku",
    price: "$95",
    description:
      "A pair of yunomi tea cups for daily use. The iron-rich clay shows through a thin tenmoku glaze, creating a surface that deepens with each cup of tea. Shaped to sit naturally in the palm — refined over years to feel like an extension of the hand.",
    specs: [
      "Iron-rich stoneware clay",
      "Tenmoku glaze",
      "Wheel-thrown",
      "Noborigama fired at 1300°C",
      "Food and dishwasher safe",
      "Height: 7cm each",
      "Capacity: 180ml each",
    ],
    specGroups: [
      { label: "Clay", values: ["Iron-rich stoneware", "Wheel-thrown by Kenji"] },
      { label: "Glaze", values: ["Tenmoku", "Noborigama fired at 1300°C"] },
      { label: "Dimensions", values: ["7cm height each", "180ml capacity each"] },
      { label: "Weight", values: ["165g each"] },
      { label: "Set", values: ["Two yunomi cups"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Hi Cup Set overhead" },
      { src: heroBg, alt: "Hi Cup glaze detail" },
      { src: heroBg, alt: "Hi Cup in hand" },
      { src: heroBg, alt: "Hi Cup Set on tray" },
    ],
    usageImages: [
      { src: heroBg, alt: "Tea in Hi Cup", caption: "Made for daily ritual" },
      { src: heroBg, alt: "Hi Cup surface", caption: "Tenmoku deepens with use" },
    ],
    careNotes: [
      "Dishwasher safe",
      "Surface will develop character over time",
      "Unglazed foot — dry base after washing",
    ],
    craftNote: "Refined by Kenji over many years\nDesigned to feel inevitable in the hand",
  },
  "stone-bowl": {
    id: "stone-bowl",
    name: "Ishi Bowl",
    subtitle: "石 · Unglazed",
    price: "$165",
    description:
      "A generous serving bowl with quiet presence. The exterior is left unglazed to honour the texture of Arita clay, while the interior carries a smooth white slip. Heavy enough to anchor a table, graceful enough to hold fruit or nothing at all.",
    specs: [
      "Arita stoneware clay",
      "White slip interior",
      "Unglazed exterior",
      "Noborigama fired at 1300°C",
      "Food safe",
      "Diameter: 30cm",
      "Height: 10cm",
    ],
    specGroups: [
      { label: "Clay", values: ["Arita stoneware", "Wheel-thrown by Kenji"] },
      { label: "Surface", values: ["White slip interior", "Unglazed exterior"] },
      { label: "Dimensions", values: ["30cm diameter", "10cm height"] },
      { label: "Weight", values: ["1.1kg"] },
      { label: "Care", values: ["Food safe", "Hand wash recommended"] },
    ],
    specImage: heroBg,
    gallery: [
      { src: heroBg, alt: "Ishi Bowl from above" },
      { src: heroBg, alt: "Ishi Bowl exterior texture" },
      { src: heroBg, alt: "Ishi Bowl with fruit" },
      { src: heroBg, alt: "Ishi Bowl profile view" },
    ],
    usageImages: [
      { src: heroBg, alt: "Ishi Bowl on table", caption: "Generous enough for gathering" },
      { src: heroBg, alt: "Ishi Bowl texture detail", caption: "Raw clay, left honest" },
    ],
    careNotes: [
      "Hand wash recommended",
      "Unglazed exterior may absorb oils — this adds character",
      "Not microwave safe",
    ],
    craftNote: "Thrown by Kenji in a single pull\nThe exterior is left raw to honour the clay",
  },
};

export const allProductsList = Object.values(products);
