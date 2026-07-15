import type { ComponentType, SVGProps } from "react";

import { CommunityIcon } from "@/components/icons/CommunityIcon";
import { CompassIcon } from "@/components/icons/CompassIcon";
import { LayersIcon } from "@/components/icons/LayersIcon";
import { LiveConditionsIcon } from "@/components/icons/LiveConditionsIcon";

export type Feature = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const features: Feature[] = [
  {
    title: "Real-time conditions",
    description:
      "Live weather, air quality, road updates, snowpack, and more.",
    icon: LiveConditionsIcon,
  },
  {
    title: "Community observations",
    description:
      "Local knowledge and recent reports from people who were just there.",
    icon: CommunityIcon,
  },
  {
    title: "Trusted data",
    description:
      "Information brought together from reliable public and private sources.",
    icon: LayersIcon,
  },
  {
    title: "Explore with confidence",
    description:
      "Make better decisions before heading into the outdoors.",
    icon: CompassIcon,
  },
];