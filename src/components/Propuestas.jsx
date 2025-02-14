import React from "react";
import { propuestas } from "./content";

const Propuestas = () => {
  return (
    <section className="p-6 bg-slate-100">
      <div>
        <h2 className="text-center text-[clamp(2.625rem,4vw,6.875rem)] font-bold mb-11">
          Mis propuestas
        </h2>
        <div className="w-full md:grid md:grid-cols-2 md:gap-7 justify-items-center items-center">
          {propuestas.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-lg mb-5 md:m-0 md:aspect-square md:w-1/2 p-5 rounded-xl"
            >
              <div className="flex text-xl font-bold">
                <span>{`${i + 1}`}-</span>
                <h2 className="mb-4">{item.nombre}</h2>
              </div>
              <p className="">{item.objetivo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Propuestas;
