import { Shield, PenTool, BarChart3, ShoppingBag, Factory, Laptop, AlertTriangle } from "lucide-react";
import { ServiceItem, PainPoint, Persona, FAQItem, BrandAssets } from "./types";

export const CONTACT_INFO = {
  whatsapp: "5511956568888",
  whatsappDisplay: "(11) 95656-8888",
  instagram: "@areisempresarial",
  instagramUrl: "https://www.instagram.com/areisempresarial/",
  location: "São Paulo - SP",
};
export const BRAND_ASSETS: BrandAssets = {
  logo: "/assets/logo/logo-original-white-bg.png",
  heroSlides: [
    "/assets/hero/areis-01.jpg",
    "/assets/hero/areis-02.jpg",
    "/assets/hero/areis-03.jpg",
  ],
  localImage: "/assets/hero/areis-04.jpg",
};

export const PAIN_POINTS: PainPoint[] = [
  { id: "1", text: "Sua marca pode estar vulnerável sem você perceber" },
  { id: "2", text: "Estampas e produtos podem ser copiados" },
  { id: "3", text: "Crescer sem proteção pode gerar bloqueios e prejuízos" },
  { id: "4", text: "Registrar depois do problema custa muito mais" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "protecao-marca",
    title: "Proteção de Marca",
    icon: Shield,
    description: [
      "Registro de marca no Brasil",
      "Análise de risco antes do registro",
      "Monitoramento contra cópias e uso indevido",
      "Organização e blindagem do portfólio de marcas"
    ],
    highlight: "Ideal para empresas do Brás, Bom Retiro e Rua 25 de Março que trabalham com marca própria."
  },
  {
    id: "protecao-criacoes",
    title: "Proteção de Criações",
    icon: PenTool,
    description: [
      "Registro de estampas exclusivas",
      "Registro de desenho industrial",
      "Registro de direito autoral",
      "Organização do acervo criativo da empresa"
    ],
    highlight: "O que é exclusivo precisa ser protegido."
  },
  {
    id: "gestao-marca",
    title: "Gestão e Cuidado da Marca",
    icon: BarChart3,
    description: [
      "Orientação de uso correto da marca",
      "Padronização e boas práticas",
      "Prevenção de perda ou nulidade",
      "Apoio estratégico para expansão e crescimento"
    ],
    highlight: "Gestão estratégica da marca como ativo empresarial."
  }
];

export const PERSONAS: Persona[] = [
  {
    title: "Moda, Varejo e Estamparia",
    icon: ShoppingBag,
    items: [
      "Lojas físicas e online",
      "Marcas próprias",
      "Estampas exclusivas",
      "Atacado e varejo"
    ],
    pain: "Principais dores: cópia, concorrência desleal, bloqueio de marca."
  },
  {
    title: "Indústria e Importadores",
    icon: Factory,
    items: [
      "Produtos próprios",
      "Design diferenciado",
      "Interesse em exclusividade e proteção de mercado"
    ]
  },
  {
    title: "Empreendedores Digitais",
    icon: Laptop,
    items: [
      "E-commerce",
      "Influenciadores com marca própria",
      "Produtos autorais"
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Por que registrar minha marca antes de crescer?",
    answer: "O registro garante a propriedade. Sem ele, todo o valor que você constrói na sua marca pode ser perdido ou tomado por terceiros, gerando prejuízos imensos."
  },
  {
    question: "Qual o risco de não proteger uma estampa?",
    answer: "Sem proteção, concorrentes podem copiar seus designs exclusivos e vender mais barato, diluindo sua exclusividade e suas margens de lucro."
  },
  {
    question: "Registro de marca protege contra cópia?",
    answer: "Sim, o registro é a única forma legal de garantir o uso exclusivo da marca em seu segmento e impedir que terceiros a utilizem indevidamente."
  },
  {
    question: "Quem atua no Brás precisa proteger a marca?",
    answer: "Absolutamente. Regiões de alto comércio como o Brás são focos de concorrência intensa. Ter a marca protegida é o que diferencia um negócio sério de um temporário."
  },
  {
    question: "Marca registrada é um ativo empresarial?",
    answer: "Sim. Uma marca registrada pode ser vendida, licenciada ou franqueada, tornando-se muitas vezes o bem mais valioso da empresa."
  }
];

// Backward compatibility for stale deploys that still compile components/Lawyers.tsx.
export const LAWYERS: Lawyer[] = [];


