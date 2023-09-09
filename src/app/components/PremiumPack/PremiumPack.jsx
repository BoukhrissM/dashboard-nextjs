import Image from "next/image";
import eschool from "./../../assets/school.png";

const PremiumPack = () => {
  return (
    <div
      className="w-full h-52  rounded-md flex flex-col justify-center items-center text-white px-3"
      style={{
        background:
          "linear-gradient(20deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 51%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Image src={eschool} height={70} />
      <p className="montserrat">E-School Pro</p>
      <p className="text-xs text-gray-400">Get access to all features</p>
      <button
        type="button"
        className="rounded-md bg-green-500 w-full my-3 py-2 transition-all hover:scale-105"
      >
        Get Pro
      </button>
    </div>
  );
};

export default PremiumPack;
