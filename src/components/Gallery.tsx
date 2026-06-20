import { motion } from "motion/react";

interface GalleryPhoto {
  src: string;
  alt: string;
}

// Troque os caminhos abaixo pelas fotos da loja.
// Basta subir os arquivos em src/assets/images/ usando estes mesmos nomes
// (ou ajuste o "src" de cada item para o nome que você usar).
const photos: GalleryPhoto[] = [
  { src: "/src/assets/images/loja_foto_1.jpg", alt: "Fachada da loja Mamute Casa e Construção" },
  { src: "/src/assets/images/loja_foto_2.jpg", alt: "Corredor interno com produtos organizados" },
  { src: "/src/assets/images/loja_foto_3.jpg", alt: "Setor de tintas e acabamentos" },
  { src: "/src/assets/images/loja_foto_4.jpg", alt: "Ferramentas em geral" },
  { src: "/src/assets/images/loja_foto_5.jpg", alt: "Estoque de materiais de construção" },
  { src: "/src/assets/images/loja_foto_6.jpg", alt: "Estacionamento gratuito da loja" },
  { src: "/src/assets/images/loja_foto_7.jpg", alt: "Setor de materiais hidráulicos" },
  { src: "/src/assets/images/loja_foto_8.jpg", alt: "Balcão de atendimento loja" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10 lg:mb-14"
        >
          <span className="inline-flex items-center text-mamute-accent text-xs font-bold uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
            Galeria
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-mamute-dark tracking-tight mt-4">
            Veja a Mamute{" "}
            <span className="text-mamute-accent">de Perto</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans mt-3">
            Um pouco do nosso dia a dia: loja física, estoque completo com o melhor atendimento, na Vila Leopoldina.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:h-full" : "aspect-[4/3]"
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
