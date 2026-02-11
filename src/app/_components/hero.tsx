import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import catImg from "../../../public/cat-hero.png";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { MoveRightIcon } from "lucide-react";

export function Hero() {
  return (
    <section
      className="bg-[#e84c3d] text-white relative overflow-hidden pt-40"
      id="home"
    >
      <div>
        <Image
          src={dogImg}
          alt="Foto do cachorro"
          title="Imagem ilustrativa do cachorro"
          fill
          sizes="100vw"
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      <div className="container mx-auto py-16 md:pb-0 px-4">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial
            </h1>

            <p className="lg:text-lg" data-aos="fade-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis laborum odit eligendi quis, neque, distinctio
              consectetur culpa, rem sint perferendis sapiente dolore debitis.
              Explicabo, nostrum. Optio consectetur officia harum quis.
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <a
                data-aos="fade-up"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-green-700 transition duration-500"
                target="_blank"
                href={WHATSAPP_LINK}
                title="Whatsapp"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Contato via whatsapp
              </a>
              <a
                data-aos="fade-up"
                className="outline outline-1 outline-gray-50 hover:bg-black hover:outline-black transition duration-500 px-5
                py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 "
                href="#contato"
                title="Contato"
              >
                Saiba Mais
                <MoveRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                de desconto na primeira compra
              </p>

              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Imagem do gato"
                    title="Imagem ilustrativa do gato"
                    className="object-fill"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto do cachorro"
              title="Imagem ilustrativa do cachorro"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
