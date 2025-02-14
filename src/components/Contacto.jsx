import { FaInstagram } from "react-icons/fa6";

const Contacto = () => {
  return (
    <footer className="bg-blueBg text-white py-10 px-6">
      <h2 className="text-center text-[clamp(2.625rem,4vw,6.875rem)] font-bold mb-11">
        Contacto
      </h2>
      <div className="flex  justify-center">
        <a href="https://www.instagram.com/thomasguerrero68/" target="_blank">
          <FaInstagram fill="#fff" size={44} />
        </a>
      </div>
    </footer>
  );
};

export default Contacto;
