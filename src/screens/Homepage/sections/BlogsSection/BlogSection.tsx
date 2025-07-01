"use client";

import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BlogsSection = (): React.ReactElement => {
  const blogPost = {
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
    image:
      "https://c.animaapp.com/mcksryy84AJgSF/img/birmingham-museums-trust-twavmkqc-cc-unsplash-1.png",
    category: "Web Developer",
    author: "Sinan",
    date: "10.oct 2023",
    readTime: "1 Min",
  };

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-32 py-[100px] relative self-stretch w-full flex-[0_0_auto] bg-bg-1">
      {/* Header Section */}
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
            <h2 className="relative w-fit mt-[-1.00px] font-h1-u font-[number:var(--h1-u-font-weight)] text-brand-1 text-[length:var(--h1-u-font-size)] tracking-[var(--h1-u-letter-spacing)] leading-[var(--h1-u-line-height)] whitespace-nowrap [font-style:var(--h1-u-font-style)]">
              Blogs
            </h2>
            <img
              className="relative self-stretch w-full h-[10.67px] mb-[-5.33px] ml-[-5.33px] mr-[-5.33px]"
              alt="Line"
              src="https://c.animaapp.com/mcksryy84AJgSF/img/line-22.svg"
            />
          </div>

          <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative flex-1 mt-[-1.00px] font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] text-center tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] [font-style:var(--para-m-font-style)]">
              My thoughts on technology and business, welcome to subscribe
            </p>
          </div>
        </div>
      </div>

      {/* Blog Post Section */}
      <div className="flex flex-col items-center justify-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
        <Card className="inline-flex flex-col justify-center gap-16 items-center relative flex-[0_0_auto] border-none bg-transparent">
          <Separator className="relative self-stretch w-full h-px mt-[-1.00px] object-cover" />

          <CardContent className="inline-flex justify-center gap-16 px-3.5 py-0 items-center relative flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <img
                className="relative w-60 h-60 object-cover"
                alt="Birmingham museums"
                src={blogPost.image}
              />
            </div>

            <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
              <h3 className="relative self-stretch mt-[-1.00px] font-h2-u font-[number:var(--h2-u-font-weight)] text-brand-1 text-[length:var(--h2-u-font-size)] tracking-[var(--h2-u-letter-spacing)] leading-[var(--h2-u-line-height)] [font-style:var(--h2-u-font-style)]">
                {blogPost.title}
              </h3>

              <p className="relative w-[720px] font-para-u font-[number:var(--para-u-font-weight)] text-white text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] [font-style:var(--para-u-font-style)]">
                {blogPost.excerpt}
              </p>

              <div className="flex items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <button className="inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] bg-transparent border-none cursor-pointer">
                  <span className="relative w-fit mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-brand-1 text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] whitespace-nowrap [font-style:var(--para-u-font-style)]">
                    Read More
                  </span>
                  <img
                    className="relative self-stretch w-full h-px mb-[-1.00px] object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mcksryy84AJgSF/img/line-23.svg"
                  />
                </button>

                <span className="relative w-fit mt-[-1.00px] font-para-u font-[number:var(--para-u-font-weight)] text-brand-1 text-[length:var(--para-u-font-size)] tracking-[var(--para-u-letter-spacing)] leading-[var(--para-u-line-height)] whitespace-nowrap [font-style:var(--para-u-font-style)]">
                  &gt;&gt;
                </span>
              </div>

              <div className="flex items-center gap-6 self-stretch w-full relative flex-[0_0_auto]">
                <Badge className="inline-flex items-start gap-2 px-2 py-1 relative flex-[0_0_auto] bg-grey rounded-2xl">
                  <span className="relative w-fit mt-[-1.00px] font-label-u-l font-[number:var(--label-u-l-font-weight)] text-white text-[length:var(--label-u-l-font-size)] tracking-[var(--label-u-l-letter-spacing)] leading-[var(--label-u-l-line-height)] whitespace-nowrap [font-style:var(--label-u-l-font-style)]">
                    {blogPost.category}
                  </span>
                </Badge>

                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-label-u-m font-[number:var(--label-u-m-font-weight)] text-white text-[length:var(--label-u-m-font-size)] tracking-[var(--label-u-m-letter-spacing)] leading-[var(--label-u-m-line-height)] whitespace-nowrap [font-style:var(--label-u-m-font-style)]">
                    Text
                  </span>
                  <span className="relative w-fit mt-[-1.00px] font-label-u-l font-[number:var(--label-u-l-font-weight)] text-white text-[length:var(--label-u-l-font-size)] tracking-[var(--label-u-l-letter-spacing)] leading-[var(--label-u-l-line-height)] whitespace-nowrap [font-style:var(--label-u-l-font-style)]">
                    {blogPost.author}
                  </span>
                </div>

                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-label-u-m font-[number:var(--label-u-m-font-weight)] text-white text-[length:var(--label-u-m-font-size)] tracking-[var(--label-u-m-letter-spacing)] leading-[var(--label-u-m-line-height)] whitespace-nowrap [font-style:var(--label-u-m-font-style)]">
                    Date
                  </span>
                  <span className="relative w-fit mt-[-1.00px] font-label-u-l font-[number:var(--label-u-l-font-weight)] text-white text-[length:var(--label-u-l-font-size)] tracking-[var(--label-u-l-letter-spacing)] leading-[var(--label-u-l-line-height)] whitespace-nowrap [font-style:var(--label-u-l-font-style)]">
                    {blogPost.date}
                  </span>
                </div>

                <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-label-u-m font-[number:var(--label-u-m-font-weight)] text-white text-[length:var(--label-u-m-font-size)] tracking-[var(--label-u-m-letter-spacing)] leading-[var(--label-u-m-line-height)] whitespace-nowrap [font-style:var(--label-u-m-font-style)]">
                    Read
                  </span>
                  <span className="relative w-fit mt-[-1.00px] font-label-u-l font-[number:var(--label-u-l-font-weight)] text-white text-[length:var(--label-u-l-font-size)] tracking-[var(--label-u-l-letter-spacing)] leading-[var(--label-u-l-line-height)] whitespace-nowrap [font-style:var(--label-u-l-font-style)]">
                    {blogPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>

          <Separator className="relative self-stretch w-full h-px object-cover" />
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
        <Button className="inline-flex items-center justify-center gap-4 px-8 py-4 relative flex-[0_0_auto] bg-brand-1 rounded-[32px]">
          <span className="relative w-fit mt-[-1.00px] font-button-u font-[number:var(--button-u-font-weight)] text-bg-1 text-[length:var(--button-u-font-size)] tracking-[var(--button-u-letter-spacing)] leading-[var(--button-u-line-height)] whitespace-nowrap [font-style:var(--button-u-font-style)]">
            View More
          </span>
        </Button>

        <Button
          variant="outline"
          className="inline-flex items-center justify-center gap-4 px-8 py-4 relative flex-[0_0_auto] bg-bg-1 rounded-[32px] border-2 border-solid border-[#12f7d6]"
        >
          <span className="relative w-fit mt-[-2.00px] font-button-u font-[number:var(--button-u-font-weight)] text-white text-[length:var(--button-u-font-size)] tracking-[var(--button-u-letter-spacing)] leading-[var(--button-u-line-height)] whitespace-nowrap [font-style:var(--button-u-font-style)]">
            Subscribe
          </span>
        </Button>
      </div>
    </section>
  );
};
