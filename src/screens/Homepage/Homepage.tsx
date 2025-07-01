"use client";

import React from "react";
import { BlogsSection } from "./sections/BlogsSection";
import { ContactSection } from "./sections/ContactSection";

export const Homepage = (): React.JSX.Element => {
  return (
    <div className="flex items-start relative w-full" data-model-id="44:1143">
      <div className="flex flex-col w-full items-start relative">
        <section className="hero-section w-full">
          <img
            className="w-full h-auto"
            alt="Header hero"
            src="https://c.animaapp.com/mcksryy84AJgSF/img/header-hero.png"
          />
        </section>

        <section className="about-section w-full">
          <img
            className="w-full h-auto object-cover"
            alt="About me"
            src="https://c.animaapp.com/mcksryy84AJgSF/img/about-me.png"
            style={{
              background:
                "url(https://c.animaapp.com/mcksryy84AJgSF/img/about-me.png) 50% 50% / cover, linear-gradient(0deg, rgba(26,30,35,1) 0%, rgba(26,30,35,1) 100%)",
            }}
          />
        </section>

        <section className="skills-section w-full">
          <img
            className="w-full h-auto object-cover"
            alt="Skills"
            src="https://c.animaapp.com/mcksryy84AJgSF/img/skills.png"
            style={{
              background:
                "url(https://c.animaapp.com/mcksryy84AJgSF/img/skills.png) 50% 50% / cover, linear-gradient(0deg, rgba(41,47,54,1) 0%, rgba(41,47,54,1) 100%)",
            }}
          />
        </section>

        <section className="works-section w-full">
          <img
            className="w-full h-auto"
            alt="Works"
            src="https://c.animaapp.com/mcksryy84AJgSF/img/works.png"
            style={{
              background:
                "url(https://c.animaapp.com/mcksryy84AJgSF/img/works.png) 100% 100%, linear-gradient(0deg, rgba(26,30,35,1) 0%, rgba(26,30,35,1) 100%)",
            }}
          />
        </section>

        <BlogsSection />
        <ContactSection />
      </div>
    </div>
  );
};
