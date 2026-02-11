"use client";

import useEmblaCarousel from "embla-carousel-react";

import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis minus molestias porro alias tempore nemo. Dolore minus impedit, doloremque numquam inventore, ad nihil dignissimos deserunt in adipisci assumenda deleniti!",
    duration: "1h",
    price: "50",
    icon: <Scissors />,
    linkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis minus molestias porro alias tempore nemo. Dolore minus impedit, doloremque numquam inventore, ad nihil dignissimos deserunt in adipisci assumenda deleniti!",
    duration: "1h",
    price: "50",
    icon: <Scissors />,
    linkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis minus molestias porro alias tempore nemo. Dolore minus impedit, doloremque numquam inventore, ad nihil dignissimos deserunt in adipisci assumenda deleniti!",
    duration: "1h",
    price: "50",
    icon: <Scissors />,
    linkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis minus molestias porro alias tempore nemo. Dolore minus impedit, doloremque numquam inventore, ad nihil dignissimos deserunt in adipisci assumenda deleniti!",
    duration: "1h",
    price: "50",
    icon: <Scissors />,
    linkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis minus molestias porro alias tempore nemo. Dolore minus impedit, doloremque numquam inventore, ad nihil dignissimos deserunt in adipisci assumenda deleniti!",
    duration: "1h",
    price: "50",
    icon: <Scissors />,
    linkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrolPrev() {
    emblaApi?.scrollPrev();
  }

  function scrolNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative" data-aos="fade-up-right">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] xl:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e203b] text-white rounded-2xl p-6 space-y-4 h-full flex-col">
                    <div className="flex-1 felx items-start justify-between">
                      <div className="flex gap-3 items-start">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl mb-1 mt-0">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        className="flex items-center justify-center gap-2 hover:bg-green-700 duration-300 p-2 px-4 rounded"
                        target="_blank"
                        href={`https://wa.me/5511965152919?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                        title="Entrar em contato"
                      >
                        Entrar em contato
                        <WhatsappLogoIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute left-3 -translate-y-1/2
          -translate-x-1/2 top-1/2 z-10"
            onClick={scrolPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute -right-7 -translate-y-1/2
          -translate-x-1/2 top-1/2 z-10"
            onClick={scrolNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
