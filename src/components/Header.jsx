import Image from "next/image";

const Header = () => {
  return (
    <header className=" h-20  absolute inset-x-0 top-0 z-50">
      <nav className="h-full flex items-center justify-center px-6 py-2 lg:px-8">
        <div className="h-full">
          <Image
            src={`/escudo.png`}
            alt="Escudo del colegio rosario"
            width={227}
            height={270}
            className="h-full w-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
