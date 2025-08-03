import React from "react";
import Image from "next/image";

import { testimonials, TestimonialSection } from "@Types/testimonial";

const Testimonials = (): React.JSX.Element => (
  <section className="landingSection" aria-labelledby="testimonial-heading">
    <h2 id="testimonial-heading" className="landingHeader">
      What Our Users Say
    </h2>

    <div className="flexCol [gap:clamp(16px,4vw,64px)]">
      {testimonials.map(
        (
          { img, alt, name, quote }: TestimonialSection,
          index: number,
        ): React.JSX.Element => (
          <figure
            key={index}
            role="img"
            className="flexCol [gap:clamp(16px,2vw,32px)]"
          >
            <div className="flex items-center justify-center align-middle [gap:clamp(8px,2vw,24px)]">
              <Image
                src={img}
                alt={alt}
                width={96}
                height={96}
                className="avatarIllustration"
              />

              <figcaption className="landingQuoteTitle">
                <cite>{name}</cite>
              </figcaption>
            </div>

            <blockquote className="landingQuote">
              <p>{quote}</p>
            </blockquote>
          </figure>
        ),
      )}
    </div>
  </section>
);

export default Testimonials;
