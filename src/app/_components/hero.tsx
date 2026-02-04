import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogImg from "../../../public/hero-dog.webp";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden">

      <Image
        src={dogImg}
        alt="Foto do cachorro"
        title="Imagem ilustrativa do cachorro"
        fill
        sizes="100vw"
        className="object-cover opacity-60 lg:hidden"
      />

      <div className="container mx-auto py-16 md:pb-0 px-4">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial
            </h1>

            <p className="lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis laborum odit eligendi quis, neque, distinctio
              consectetur culpa, rem sint perferendis sapiente dolore debitis.
              Explicabo, nostrum. Optio consectetur officia harum quis.
            </p>

            <div>
              <a
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 hover:bg-black transition-all"
                href="#"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Contato via whatsapp
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                de desconto na primeira compra
              </p>
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
