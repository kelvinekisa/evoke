"use client";

import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    {
      icon: "https://c.animaapp.com/mcksryy84AJgSF/img/icon-instagram.svg",
      alt: "Instagram",
      type: "background",
    },
    {
      icon: "https://c.animaapp.com/mcksryy84AJgSF/img/discord.svg",
      alt: "Discord",
      type: "image",
    },
    {
      icon: "https://c.animaapp.com/mcksryy84AJgSF/img/github.svg",
      alt: "Github",
      type: "image",
    },
  ];

  const footerLinks = [
    { text: "Privacy Policy" },
    { text: "Terms & Conditions" },
  ];

  return (
    <div className="flex flex-col items-center gap-16 pt-16 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] bg-bg-2">
      <div className="flex flex-col gap-[102px] self-stretch w-full items-center relative flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-center justify-center gap-4 relative flex-[0_0_auto]">
            <img
              className="relative flex-[0_0_auto]"
              alt="Mouse"
              src="https://c.animaapp.com/mcksryy84AJgSF/img/mouse.svg"
            />
            <img
              className="relative flex-[0_0_auto] mb-[-5.77px]"
              alt="Line"
              src="https://c.animaapp.com/mcksryy84AJgSF/img/line.svg"
            />
          </div>

          <div className="flex flex-col gap-4 self-stretch w-full items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-h1-u font-[number:var(--h1-u-font-weight)] text-brand-1 text-[length:var(--h1-u-font-size)] tracking-[var(--h1-u-letter-spacing)] leading-[var(--h1-u-line-height)] whitespace-nowrap [font-style:var(--h1-u-font-style)]">
                Contact
              </div>
              <img
                className="relative self-stretch w-full h-[10.67px] mb-[-5.33px] ml-[-5.33px] mr-[-5.33px]"
                alt="Line"
                src="https://c.animaapp.com/mcksryy84AJgSF/img/line-22.svg"
              />
            </div>

            <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] text-center tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] [font-style:var(--para-m-font-style)]">
                I&apos;m currently available for freelance work
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col gap-16 self-stretch w-full items-center relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-center px-10 py-4 relative flex-[0_0_auto] rounded-[32px_0px_32px_0px] border-2 border-solid border-[#12f7d6]">
              <div className="relative w-fit mt-[-2.00px] font-logo-m font-[number:var(--logo-m-font-weight)] text-brand-1 text-[length:var(--logo-m-font-size)] text-center tracking-[var(--logo-m-letter-spacing)] leading-[var(--logo-m-line-height)] whitespace-nowrap [font-style:var(--logo-m-font-style)]">
                Send Me A Message
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-16 px-[400px] py-0 self-stretch w-full relative flex-[0_0_auto]"
            >
              <div className="justify-center gap-32 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-6 flex-1 grow flex-col relative">
                  <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <label className="relative flex-1 mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-brand-1 text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)]">
                      Your name *
                    </label>
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="relative self-stretch mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)] bg-transparent border-0 border-b border-white rounded-none px-0 py-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <label className="relative flex-1 mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-brand-1 text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)]">
                      Your email *
                    </label>
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="relative self-stretch mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)] bg-transparent border-0 border-b border-white rounded-none px-0 py-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
              </div>

              <div className="gap-16 flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                  <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                    <label className="relative flex-1 mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-brand-1 text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)]">
                      Your message *
                    </label>
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your needs"
                      className="relative self-stretch mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)] bg-transparent border-0 border-b border-white rounded-none px-0 py-0 min-h-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <Button
            type="submit"
            className="inline-flex items-center justify-center gap-4 px-8 py-4 relative flex-[0_0_auto] bg-brand-1 rounded-[32px] hover:bg-brand-2 hover:text-bg-1 transition-colors"
          >
            <span className="relative w-fit mt-[-1.00px] font-button-u font-[number:var(--button-u-font-weight)] text-bg-1 text-[length:var(--button-u-font-size)] tracking-[var(--button-u-letter-spacing)] leading-[var(--button-u-line-height)] whitespace-nowrap [font-style:var(--button-u-font-style)]">
              Send Message
            </span>
            <div className="w-6 h-6 bg-[url(https://c.animaapp.com/mcksryy84AJgSF/img/icon-send.svg)] relative bg-[100%_100%]" />
          </Button>
        </div>
      </div>

      <footer className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
        <Separator className="relative self-stretch w-full h-px mt-[-1.00px]" />

        <div className="flex justify-between px-32 py-0 self-stretch w-full items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] whitespace-nowrap [font-style:var(--para-u-font-style)]">
              © 2023 Evoke. All rights reserved.
            </div>
          </div>

          <div className="inline-flex items-center justify-center gap-8 relative flex-[0_0_auto]">
            {footerLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="relative w-fit mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] text-center tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] whitespace-nowrap [font-style:var(--para-u-font-style)] p-0 h-auto"
              >
                {link.text}
              </Button>
            ))}
          </div>

          <div className="gap-8 inline-flex items-start justify-center relative flex-[0_0_auto]">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="p-2 bg-brand-2 rounded-[48px] inline-flex items-start justify-center relative flex-[0_0_auto] hover:bg-brand-1"
              >
                {social.type === "background" ? (
                  <div
                    className={`w-4 h-4 bg-[url(${social.icon})] relative bg-[100%_100%]`}
                    aria-label={social.alt}
                  />
                ) : (
                  <img
                    className="relative w-4 h-4"
                    alt={social.alt}
                    src={social.icon}
                  />
                )}
              </Button>
            ))}
          </div>

          <div className="inline-flex items-start justify-end gap-1 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] text-center tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] whitespace-nowrap [font-style:var(--para-u-font-style)]">
              Design By
            </div>
            <div className="inline-flex items-end justify-center gap-1 flex-[0_0_auto] flex-col relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Ubuntu',Helvetica] font-light text-brand-1 text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                Kelvinekisa
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
