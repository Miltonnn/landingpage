import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import {
  CheckIcon,
  MapPinIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#fdfec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro"
                title="Foto do cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2Img}
                alt="Foto do Gato"
                title="Foto do Gato"
                quality={100}
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
              perferendis animi at sint magni, ex quasi officiis, quis officia,
              minima doloribus. Delectus earum incidunt doloribus nobis.
              Laudantium eius reiciendis facere!
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckIcon className="text-red-500 font-medium text-2xl" />
                Alberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="text-red-500 font-medium text-2xl" />
                Alberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="text-red-500 font-medium text-2xl" />
                Alberto desde 2006
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="text-red-500 font-medium text-2xl" />
                Alberto desde 2006
              </li>
            </ul>

            <div className="flex gap-2 flex-col md:flex-row">
              <a
                href="#"
                className="bg-[#e84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 hover:bg-black duration-300"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhtasApp
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-fit gap-2 px-4 py-2 hover:bg-black hover:text-white duration-300"
              >
                <MapPinIcon className="w-5 h-5" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
