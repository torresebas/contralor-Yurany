import Image from "next/image";
import Header from "./Header";
import { perfilThomas } from "./content";

const Hero = () => {
  return (
    <section className="bg-white h-full">
      <Header />
      <div className=" pt-24  md:grid md:grid-cols-2 md:px-[20%]">
        <div className="w-[80%]  self-center justify-self-center ">
          <Image
            className="h-full w-full object-cover"
            src={`/thomas.jpeg`}
            alt="Foto"
            width={872}
            height={1160}
          />
        </div>
        <div className="bg-red-500X flex justify-center items-center py-20">
          <div className=" text-center">
            <h1 className="text-[clamp(4.25rem,6vw,6.875rem)] leading-none font-bold tracking-tight">
              {perfilThomas.nombre}
            </h1>
            <h2 className="text-[clamp(3rem,2vw,2.625rem)] leading-none font-boldX tracking-tight">
              {perfilThomas.apellido}
            </h2>
            <h2 className="text-[clamp(2rem,2vw,2.625rem)] leading-none my-5 ">
              {perfilThomas.cargo} 2025
            </h2>
            <h2 className="font-bold text-4xl">{perfilThomas.numero}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
