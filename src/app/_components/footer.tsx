import golden from "../../../public/golden.png";
import royal from "../../../public/royal.png";
import primier from "../../../public/primier.png";
import whiskas from "../../../public/whiskas.png";
import natural from "../../../public/natural.png";
import Image from "next/image";
import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { SOCIAL_LINKS } from "@/lib/social-links";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Royal Canin", logo: golden },
  { name: "Royal Canin", logo: primier },
  { name: "Royal Canin", logo: natural },
  { name: "Royal Canin", logo: whiskas },
  { name: "Royal Canin", logo: whiskas },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white" id="clientes">
      <div className="container mx-auto px-4" data-aos="fade-up-right">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação
            </p>
            <a
              className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-700 duration-300 flex items-center gap-2 w-fit"
              target="_blank"
              href={WHATSAPP_LINK}
              title="Contato via Whatsapp"
            >
              <WhatsappLogoIcon />
              Contato via Whatsapp
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: miltonandrade2919@gmail.com</p>
            <p>Telefone: (11) 96770-8990</p>
            <p>Rua: X, centro, São Bernado | SP</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a href={SOCIAL_LINKS.linkedin} title="Linkedin" target="_blank">
                <LinkedinLogoIcon className="w-6 h-6 hover:opacity-50 duration-300" />
              </a>
              <a href={SOCIAL_LINKS.instagram} title="Instagram" target="_blank">
                <InstagramLogoIcon className="w-6 h-6 hover:opacity-50 duration-300" />
              </a>
              <a href={SOCIAL_LINKS.github} title="Github" target="_blank">
                <GithubLogoIcon className="w-6 h-6 hover:opacity-50 duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
