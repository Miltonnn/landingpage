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
import tutor1 from "../../../public/tutor1.png";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt accusantium atque aut odit molestiae unde soluta et consectetur sed fugiat esse quam, ducimus voluptatibus ex laudantium recusandae modi labore?",
    author: "Sem nome",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt accusantium atque aut odit molestiae unde soluta et consectetur sed fugiat esse quam, ducimus voluptatibus ex laudantium recusandae modi labore?",
    author: "Sem nome",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt accusantium atque aut odit molestiae unde soluta et consectetur sed fugiat esse quam, ducimus voluptatibus ex laudantium recusandae modi labore?",
    author: "Sem nome",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt accusantium atque aut odit molestiae unde soluta et consectetur sed fugiat esse quam, ducimus voluptatibus ex laudantium recusandae modi labore?",
    author: "Sem nome",
    role: "Tutora da Luna (Golden Retriever)",
    image: tutor1,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  function scrolPrev() {
    emblaApi?.scrollPrev();
  }

  function scrolNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#ffd449] py-16" id="depoimentos">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Depoimentos Dos Nossos Clientes
        </h2>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up-left">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e203b] text-white rounded-2xl p-6 space-y-4 h-full flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative  w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.content}</p>
                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute left-4 -translate-y-1/2
          -translate-x-1/2 top-1/2 z-10"
            onClick={scrolPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute -right-6 -translate-y-1/2
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
