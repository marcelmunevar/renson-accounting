interface ServiceProps {
  title: string;
  description: React.ReactNode;
  background?: string;
}

const ServiceSection = ({ title, description, background }: ServiceProps) => {
  return (
    <div className="group relative overflow-hidden">
      {/* Background layer: uses the passed background classes (e.g. `bg-hero`) and scales on lg hover */}
      <div
        className={`absolute inset-0 ${background ?? ""} bg-cover bg-center transform scale-100 origin-center transition-transform duration-700 ease-out lg:group-hover:scale-110`}
      />

      {/* Dark overlay so foreground text remains readable */}
      <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />

      {/* Foreground content */}
      <div className="relative z-10 p-8 flex flex-col items-center justify-center gap-4 text-center text-white">
        <div className={`flex flex-col-reverse md:flex-col container mx-auto max-w-4xl gap-8 md:gap-24`}>
          <div className="flex flex-col gap-4 text-left bg-black/80 bg-blend-multiply p-4 rounded">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
