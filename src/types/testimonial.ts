import { StaticImageData } from "next/image";

import man5 from "@Images/avatars/man-5.png";
import woman2 from "@Images/avatars/woman-2.png";

export interface TestimonialSection {
  img: StaticImageData;
  alt: string;
  name: string;
  quote: string;
}

export const testimonials: TestimonialSection[] = [
  {
    img: man5,
    alt: "Portrait of Alex M., Project Manager",
    name: "Alex M., Project Manager",
    quote:
      "TaskTrail transformed the way our team collaborates. The simplicity and clarity keep us on track every sprint.",
  },
  {
    img: woman2,
    alt: "Portrait of Priya S., Product Owner",
    name: "Priya S., Product Owner",
    quote:
      "Finally, a tool that does not slow us down. We ship faster and stay organized without the clutter.",
  },
];
