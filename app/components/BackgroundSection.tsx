import React from "react";
import Divider from "./Divider";
import Button from "./Button";

interface BackgroundSectionProps {
  padding?: string;
  heading: string;
  subheading: string;
  cta: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  heading,
  subheading,
  cta,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-4 px-4 text-center bg-hero bg-cover bg-center text-white bg-black/50 bg-blend-multiply h-[60vh]`}
    >
      <h1 className="text-4xl font-bold font-roboto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
        {heading}
      </h1>
      <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
        {subheading}
      </p>
      <Divider />
      <Button href="https://form.jotform.com/243405604271045">Email Us</Button>
      <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] text-lg font-bold">
        {cta}
      </p>
    </div>
  );
};

export default BackgroundSection;
