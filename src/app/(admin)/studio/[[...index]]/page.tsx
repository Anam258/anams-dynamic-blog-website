import type { Metadata } from "next";
import type { Viewport } from "next";
import Studio from "./Studio";

// Manually define the metadata and viewport, if needed
export const metadata: Metadata = {
  title: "Loading Studio...", // You can update this as needed
  description: "A placeholder description for your Studio page",
  // Other metadata fields can be added here as needed
};

export const viewport: Viewport = {
  width: "device-width",  // Adjust based on your needs
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
  interactiveWidget: "resizes-content", // You can keep this if necessary
};

const StudioPage = () => {
  return <Studio />;
};

export default StudioPage;
