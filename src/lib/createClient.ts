import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

// Sanity client setup
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Set up the image builder (to generate image URLs)
const builder = ImageUrlBuilder(client);

// This function returns the URL for an image
export const urlFor = (source: { asset: { _ref: string } } | undefined) => {
  if (!source?.asset?._ref) {
    return '/fallback-image.jpg';  // fallback if no image
  }
  return builder.image(source);
};
