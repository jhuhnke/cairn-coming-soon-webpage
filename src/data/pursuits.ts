interface Pursuit {
  name: string;
  description: string;
  image: string;
  href: string;
}

export const pursuits: Pursuit[] = [
  {
    name: "Hiking",
    description: "Conditions, hazards, access, and recent trail reports.",
    image: "/images/pursuits/hiking.webp",
    href: "/outdoors",
  },
  {
    name: "Cycling",
    description: "Surface conditions, closures, weather, and route insight.",
    image: "/images/pursuits/cycling.webp",
    href: "/outdoors",
  },
  {
    name: "Skiing",
    description: "Snow, weather, access, and recent observations.",
    image: "/images/pursuits/skiing.webp",
    href: "/outdoors",
  },
  {
    name: "Running",
    description: "Fresh trail intelligence for everyday and long efforts.",
    image: "/images/pursuits/running.webp",
    href: "/outdoors",
  },
  {
    name: "Camping",
    description: "Access, fire restrictions, weather, and nearby conditions.",
    image: "/images/pursuits/camping.webp",
    href: "/outdoors",
  },
  {
    name: "Fishing",
    description: "Water, weather, access, and timely local observations.",
    image: "/images/pursuits/fishing.webp",
    href: "/outdoors",
  },
];