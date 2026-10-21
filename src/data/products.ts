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
    name: "Goma",
    subtitle: "참기름 · Sesame Oil",
    price: "$185",
    description:
      "Meet Goma. 참기름 — sesame oil. A small seed with a rich story to tell. Nutty, aromatic and endlessly at home in the kitchen — try a drizzle over noodles, a few drops in your favourite dressing or a warm finishing note just before serving.",
    specs: [
      "Made from sesame seeds",
      "Distinctive sesame flavour",
      "Suitable for dressings and marinades",
      "Use in sauces, noodles and rice dishes",
      "Check the bottle label for volume and nutritional information",
      "Contains sesame",
    ],
    specGroups: [
      { label: "The essence · 참깨", values: ["Sesame oil", "For the kitchen & table"] },
      { label: "The character", values: ["Aromatic and nutty", "Beautifully distinctive"] },
      { label: "The ritual", values: ["Dressings, dips & marinades", "Finish a dish with a drizzle"] },
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
      { src: heroBg, alt: "Sesame oil serving suggestion", caption: "A little, beautifully placed" },
      { src: heroBg, alt: "Sesame oil in the kitchen", caption: "Made for gathering around the table" },
    ],
    careNotes: [
      "Contains sesame — check allergen information before use",
      "Keep the bottle tightly closed after opening",
      "Follow the storage instructions on the label",
    ],
    craftNote: "From quick weekday cooking to a carefully prepared meal\nA familiar ingredient with a distinctive flavour",
  },
};

export const allProductsList = Object.values(products);
