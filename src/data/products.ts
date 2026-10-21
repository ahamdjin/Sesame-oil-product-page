import galleryBottle from "@/assets/sesame-oil/goso-transparent-04.png";
import galleryDetail from "@/assets/sesame-oil/goso-transparent-10.png";
import galleryOil from "@/assets/sesame-oil/goso-cinematic-06.png";
import galleryTable from "@/assets/sesame-oil/goso-cinematic-01.png";
import specificationImage from "@/assets/sesame-oil/goso-transparent-09.png";
import usagePour from "@/assets/sesame-oil/goso-cinematic-02.png";
import usageKitchen from "@/assets/sesame-oil/goso-cinematic-08.png";

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
    name: "Goso",
    subtitle: "참기름 · Sesame Oil",
    price: "$185",
    description:
      "Meet Goso. Inspired by 고소하다 — the Korean word for a rich, nutty flavour. 참기름 is sesame oil. A small seed with a rich story to tell. Nutty, aromatic and endlessly at home in the kitchen — try a drizzle over noodles, a few drops in your favourite dressing or a warm finishing note just before serving.",
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
    specImage: specificationImage,
    gallery: [
      { src: galleryBottle, alt: "Goso & Soul Korean sesame oil bottle" },
      { src: galleryDetail, alt: "Close-up of Goso & Soul sesame oil bottle" },
      { src: galleryOil, alt: "Goso & Soul sesame oil label and amber glass detail" },
      { src: galleryTable, alt: "Sesame oil served with sesame seeds and ceramic dishes" },
    ],
    usageImages: [
      { src: usagePour, alt: "Golden sesame oil and serving inspiration", caption: "A little, beautifully placed" },
      { src: usageKitchen, alt: "Goso & Soul sesame oil photographed in warm studio lighting", caption: "Made for gathering around the table" },
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
