import React from 'react';
import Image, { StaticImageData } from 'next/image'

interface AboutSectionProps {
  name: string;
  description: string;
  pictureSrc: StaticImageData;
}

const AboutSection: React.FC<AboutSectionProps> = ({ name, description, pictureSrc }) => {
  return (
    <div className="flex max-w-4xl flex-col-reverse md:flex-row">
      <div className="flex flex-1 flex-col gap-10 justify-center">
        <h1 className="text-6xl font-bold text-sky-600">{name}</h1>
        <p className="text-gray-800">{description}</p>
      </div>
      <div className="flex flex-1">
        <Image src={pictureSrc} alt={name} className="rounded-full" />
      </div>
    </div>
  );
};

export default AboutSection;
