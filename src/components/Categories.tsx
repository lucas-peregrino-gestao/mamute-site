import React, { useState } from "react";
import { motion } from "motion/react";
import { Droplet, Zap, Paintbrush, Hammer, Layers, Check, MessageSquare } from "lucide-react";

interface Category {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: string[];
  image: string;
  whatsappMessage: string;
}

export default function Categories() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories: Category[] = [
    {
      id: "hidraulica",
      icon: <Droplet className="w-5 h-5" />,
      title: "Hidráulica e Banheiros",
      subtitle: "Tudo para água fria, quente e reparos gerais",
      items: [
        "Tubos e conexões (PVC, PPR, Cobre)",
        "Assentos sanitários (diversos modelos)",
        "Reparos de caixa acoplada e válvulas",
        "Torneiras para cozinha, banheiro e jardim",
        "Sifões, ralos, grelhas e engates flexíveis"
      ],
      image: "https://i.imgur.com/QoM4ykR.jpeg",
      whatsappMessage: "Olá, gostaria de consultar a disponibilidade de conexões e itens de hidráulica."
    },
    {
      id: "eletrica",
      icon: <Zap className="w-5 h-5" />,
      title: "Elétrica e Iluminação",
      subtitle: "As melhores marcas para a fiação de sua casa",
      items: [
        "Fios e cabos elétricos normatizados",
        "Chuveiros e resistências Lorenzetti de reposição",
        "Lâmpadas LED, spots e fitas decorativas",
        "Painéis LED de embutir e sobrepor",
        "Disjuntores, tomadas e interruptores robustos"
      ],
      image: "https://i.imgur.com/gTZbuGD.jpeg",
      whatsappMessage: "Olá, gostaria de cotar fios, cabos e chuveiros/resistências Lorenzetti."
    },
    {
      id: "tintas",
      icon: <Paintbrush className="w-5 h-5" />,
      title: "Tintas e Selantes",
      subtitle: "Preparação e acabamento com alta vedação",
      items: [
        "Massa corrida e massa acrílica",
        "Tintas acrílicas (branco, cores tradicionais e mistas)",
        "Silicones (neutro, acético), PU e veda-calha",
        "Solventes, aguarrás e thinner",
        "Trinchas, rolos, espátulas e acessórios de pintura"
      ],
      image: "https://i.imgur.com/6nO4VN2.jpeg",
      whatsappMessage: "Olá! Gostaria de falar sobre tintas, massas e silicones de vedação."
    },
    {
      id: "ferramentas",
      icon: <Hammer className="w-5 h-5" />,
      title: "Ferramentas em Geral",
      subtitle: "Equipamentos resistentes para trabalhar seguro",
      items: [
        "Chaves de fenda e phillips de todas as medidas",
        "Martelos de unha e marretas industriais",
        "Colheres de pedreiro e desempenadeiras",
        "Grifos, alicates universais e chaves inglesas",
        "Parafusos, buchas, pregos e ferragens para fixação"
      ],
      image: "https://i.imgur.com/fcm3Tfl.jpeg",
      whatsappMessage: "Olá! Preciso de ferramentas manuais ou acessórios de fixação."
    },
    {
      id: "base",
      icon: <Layers className="w-5 h-5" />,
      title: "Materiais de Base",
      subtitle: "A fundação forte que sua obra necessita",
      items: [
        "Areia média e grossa ensacada",
        "Pedra brita ensacada (alta resistência)",
        "Cimento de alta qualidade",
        "Argamassas e rejuntes",
        "Ferragens em geral"
      ],
      image: "https://i.imgur.com/WfNv2EL.jpeg",
      whatsappMessage: "Olá! Gostaria de consultar preços de areia, pedra e cimento ensacados."
    }
  ];

  const filteredCategories = activeTab === "all" 
    ? categories 
    : categories.filter(c => c.id === activeTab);

  const getWhatsAppLink = (msg: string) => {
    return `https://wa.me/551123642867?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="categories" className="py-16 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-mamute-accent bg-mamute-accent/10 px-3 py-1.5 rounded-full inline-block mb-3">
            O Que Você Encontra Aqui
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-mamute-dark tracking-tight">
            Categorias Completas para sua Casa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-sans">
            Trabalhamos com marcas renomadas no mercado e um mix diversificado para resolver seu problema na hora.
          </p>
          <div className="h-1 bg-mamute-accent w-24 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-mamute-dark text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-150 border border-gray-200"
            }`}
          >
            Todas as Categorias
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-mamute-accent text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-150 border border-gray-200"
              }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Visual Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => (
            <motion.div
              layout
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative h-48 w-full">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />
                  
                  {/* Category overlay label */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-mamute-accent text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      Mamute Material
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-mamute-accent shadow-md">
                      {cat.icon}
                    </div>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-mamute-dark">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-mamute-accent font-bold mb-4 uppercase tracking-wider">
                    {cat.subtitle}
                  </p>

                  <ul className="space-y-2 text-justify">
                    {cat.items.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600 font-sans">
                        <Check className="w-5 h-5 text-mamute-green shrink-0 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action query specifically for this category */}
              <div className="p-6 pt-0 mt-auto">
                <a
                  href={getWhatsAppLink(cat.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-mamute-dark hover:bg-mamute-accent text-white font-sans font-bold text-xs uppercase tracking-wider text-center py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageSquare size={14} className="group-hover:scale-110 transition-transform" />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Trust Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-gray-500 font-sans">
            Não encontrou o que procura? Nós ajudamos você. Fale conosco agora!
          </p>
          <a
            href={getWhatsAppLink("Olá! Preciso de um item que não vi na lista. Vocês trabalham com...")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-2.5 text-mamute-accent hover:text-mamute-accent-hover font-bold text-sm underline font-display transition-colors"
          >
            Chamar no WhatsApp (11) 2364-2867
          </a>
        </div>

      </div>
    </section>
  );
}
