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
    craftNote: "From quick weekday cooking to a carefully prepared meal\nA familiar ingredient with a distinctive flavour",
  },
};

export const allProductsList = Object.values(products);
