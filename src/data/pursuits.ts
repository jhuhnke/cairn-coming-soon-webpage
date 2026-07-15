export type Pursuit = {
  name: string;
  description: string;
  image: string;
  href: string;
};

export const pursuits: Pursuit[] = [
  {
    name: "Hiking",
    description: "Trail conditions, hazards, access, and recent reports.",
    image: "/images/pursuits/hiking.webp",
    href: "/outdoors/hiking",
  },
  {
    name: "Cycling",
    description: "Surface conditions, closures, weather, and route insight.",
    image: "/images/pursuits/cycling.webp",
    href: "/outdoors/cycling",
  },
  {
    name: "Skiing",
    description: "Snowpack, approach conditions, weather, and observations.",
    image: "/images/pursuits/skiing.webp",
    href: "/outdoors/skiing",
  },
  {
    name: "Running",
    description: "Current trail conditions for everyday and long adventures.",
    image: "/images/pursuits/running.webp",
    href: "/outdoors/running",
  },
  {
    name: "Camping",
    description: "Access, weather, fire restrictions, and nearby conditions.",
    image: "/images/pursuits/camping.webp",
    href: "/outdoors/camping",
  },
  {
    name: "Fishing",
    description: "Water, weather, access, and timely community observations.",
    image: "/images/pursuits/fishing.webp",
    href: "/outdoors/fishing",
  },
];