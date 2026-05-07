const STORAGE_KEYS = {
  products: "imperio-products",
  highlights: "imperio-highlights",
  posts: "imperio-posts",
};

export const categories = [
  {
    id: "biscoitos",
    name: "Biscoitos",
    description: "Receitas artesanais com ingredientes integrais e naturais.",
    icon: "🍪",
  },
  {
    id: "castanhas",
    name: "Castanhas",
    description: "Mixes selecionados para energia e bem-estar.",
    icon: "🥜",
  },
  {
    id: "queijos",
    name: "Queijos",
    description: "Opções artesanais, maturadas e funcionais.",
    icon: "🧀",
  },
  {
    id: "temperos",
    name: "Temperos",
    description: "Ervas, sais e blends para realçar sabores.",
    icon: "🌿",
  },
  {
    id: "chas",
    name: "Chás & Infusões",
    description: "Combinações calmantes e digestivas.",
    icon: "🍵",
  },
  {
    id: "granolas",
    name: "Granolas",
    description: "Crocantes, sem conservantes e ricas em fibras.",
    icon: "🥣",
  },
];

export const storeInfo = {
  name: "Império Natural",
  address: "Rua das Ervas, 145 - Asa Sul, Brasília",
  phone: "(61) 3333-2456",
  hours: "Seg a Sáb · 08h às 20h",
};

const defaultProducts = [
  {
    id: "biscoito-avena-mel",
    name: "Biscoito de Aveia com Mel",
    category: "Biscoitos",
    price: 18.9,
    unit: "200g",
    description: "Biscoitos integrais assados lentamente, adoçados com mel e especiarias.",
    ingredients: "Farinha de aveia, mel, óleo de coco, canela, fermento natural.",
    allergens: "Contém glúten. Pode conter castanhas.",
    origin: "Produção local · Forno artesão",
    storage: "Conservar em local seco por até 20 dias.",
    badges: ["Integral", "Sem conservantes"],
    tags: ["lanche", "integral", "energia"],
    categoryDetails: [
      { label: "Tipo de farinha", value: "Aveia integral" },
      { label: "Textura", value: "Crocante" },
      { label: "Adoçante", value: "Mel" },
    ],
    nutrition: [
      { label: "Porção", value: "30g" },
      { label: "Calorias", value: "120 kcal" },
      { label: "Proteínas", value: "3g" },
    ],
    image: "linear-gradient(135deg, #f4b144, #e58b3b)",
  },
  {
    id: "cookie-cacau-amendoas",
    name: "Cookie de Cacau com Amêndoas",
    category: "Biscoitos",
    price: 21.5,
    unit: "180g",
    description: "Cookie macio com cacau 70% e lascas de amêndoas torradas.",
    ingredients: "Cacau, farinha integral, açúcar de coco, manteiga ghee, amêndoas.",
    allergens: "Contém glúten, leite e amêndoas.",
    origin: "Linha premium artesanal",
    storage: "Manter fechado para preservar a maciez.",
    badges: ["Sem corantes"],
    tags: ["cacau", "snack", "energia"],
    categoryDetails: [
      { label: "Intensidade do cacau", value: "70%" },
      { label: "Textura", value: "Macio" },
      { label: "Adoçante", value: "Açúcar de coco" },
    ],
    nutrition: [
      { label: "Porção", value: "40g" },
      { label: "Calorias", value: "180 kcal" },
      { label: "Gorduras boas", value: "9g" },
    ],
    image: "linear-gradient(135deg, #5a2d1b, #9a512d)",
  },
  {
    id: "mix-castanhas-premium",
    name: "Mix Premium de Castanhas",
    category: "Castanhas",
    price: 34.9,
    unit: "250g",
    description: "Seleção de castanha-do-pará, amêndoas, nozes e pecãs.",
    ingredients: "Castanha-do-pará, amêndoas, nozes, pecãs, sal rosa.",
    allergens: "Contém castanhas. Pode conter traços de amendoim.",
    origin: "Produtores certificados",
    storage: "Guardar em pote hermético após aberto.",
    badges: ["Fonte de fibras", "Sem glúten"],
    tags: ["proteína", "energia", "lanche"],
    categoryDetails: [
      { label: "Tipo de torra", value: "Leve" },
      { label: "Temperos", value: "Sal rosa e alecrim" },
      { label: "Origem", value: "Amazônia e Sul do Brasil" },
    ],
    nutrition: [
      { label: "Porção", value: "25g" },
      { label: "Calorias", value: "170 kcal" },
      { label: "Proteínas", value: "4g" },
    ],
    image: "linear-gradient(135deg, #d2a679, #b37b4c)",
  },
  {
    id: "castanha-caju-defumada",
    name: "Castanha de Caju Defumada",
    category: "Castanhas",
    price: 26.8,
    unit: "200g",
    description: "Castanhas de caju defumadas naturalmente com ervas frescas.",
    ingredients: "Castanha de caju, páprica, alecrim, sal marinho.",
    allergens: "Contém castanha de caju.",
    origin: "Nordeste brasileiro",
    storage: "Conservar em local fresco.",
    badges: ["Vegano"],
    tags: ["defumado", "aperitivo"],
    categoryDetails: [
      { label: "Intensidade", value: "Defumado médio" },
      { label: "Temperos", value: "Páprica e alecrim" },
      { label: "Textura", value: "Crocante" },
    ],
    nutrition: [
      { label: "Porção", value: "25g" },
      { label: "Calorias", value: "160 kcal" },
      { label: "Gorduras boas", value: "12g" },
    ],
    image: "linear-gradient(135deg, #b8743a, #e3a25d)",
  },
  {
    id: "queijo-bufala-ervas",
    name: "Queijo de Búfala com Ervas",
    category: "Queijos",
    price: 42.0,
    unit: "300g",
    description: "Queijo fresco de búfala com blend de ervas mediterrâneas.",
    ingredients: "Leite de búfala, sal marinho, alecrim, tomilho, orégano.",
    allergens: "Contém leite e derivados.",
    origin: "Queijaria artesanal",
    storage: "Manter refrigerado entre 2ºC e 6ºC.",
    badges: ["Fresco"],
    tags: ["queijo", "proteína"],
    categoryDetails: [
      { label: "Maturação", value: "Fresco" },
      { label: "Tipo de leite", value: "Búfala" },
      { label: "Sabor", value: "Suave e herbal" },
    ],
    nutrition: [
      { label: "Porção", value: "40g" },
      { label: "Calorias", value: "110 kcal" },
      { label: "Cálcio", value: "180mg" },
    ],
    image: "linear-gradient(135deg, #f0e8d9, #d6c5b1)",
  },
  {
    id: "blend-tempero-verde",
    name: "Blend de Tempero Verde",
    category: "Temperos",
    price: 16.5,
    unit: "120g",
    description: "Mistura fresca de ervas desidratadas para receitas do dia a dia.",
    ingredients: "Salsinha, cebolinha, manjericão, alho, sal marinho.",
    allergens: "Pode conter traços de oleaginosas.",
    origin: "Ervas orgânicas selecionadas",
    storage: "Guardar ao abrigo da luz.",
    badges: ["Orgânico"],
    tags: ["cozinha", "sabor"],
    categoryDetails: [
      { label: "Uso ideal", value: "Arroz, legumes e molhos" },
      { label: "Intensidade", value: "Aromático" },
      { label: "Tipo", value: "Ervas desidratadas" },
    ],
    nutrition: [
      { label: "Porção", value: "5g" },
      { label: "Calorias", value: "12 kcal" },
      { label: "Sódio", value: "180mg" },
    ],
    image: "linear-gradient(135deg, #6cbf7f, #3f7f52)",
  },
  {
    id: "cha-camomila-lavanda",
    name: "Chá de Camomila com Lavanda",
    category: "Chás & Infusões",
    price: 24.0,
    unit: "30 sachês",
    description: "Infusão calmante para noites tranquilas e relaxamento.",
    ingredients: "Camomila, lavanda, casca de laranja.",
    allergens: "Não contém glúten.",
    origin: "Colheita sustentável",
    storage: "Manter em local seco e arejado.",
    badges: ["Relaxante", "Sem cafeína"],
    tags: ["relaxamento", "noite"],
    categoryDetails: [
      { label: "Benefício", value: "Relaxamento" },
      { label: "Aroma", value: "Floral" },
      { label: "Intensidade", value: "Suave" },
    ],
    nutrition: [
      { label: "Porção", value: "1 sachê" },
      { label: "Calorias", value: "0 kcal" },
      { label: "Cafeína", value: "0" },
    ],
    image: "linear-gradient(135deg, #b6b3e6, #8c7fd4)",
  },
  {
    id: "granola-frutas-vermelhas",
    name: "Granola de Frutas Vermelhas",
    category: "Granolas",
    price: 28.9,
    unit: "350g",
    description: "Granola crocante com frutas vermelhas e sementes.",
    ingredients: "Aveia, cranberry, morango desidratado, mel, sementes de girassol.",
    allergens: "Contém glúten. Pode conter castanhas.",
    origin: "Linha funcional",
    storage: "Conservar bem fechado.",
    badges: ["Fonte de fibras"],
    tags: ["café da manhã", "energia"],
    categoryDetails: [
      { label: "Adoçante", value: "Mel" },
      { label: "Textura", value: "Crocante" },
      { label: "Frutas", value: "Vermelhas" },
    ],
    nutrition: [
      { label: "Porção", value: "40g" },
      { label: "Calorias", value: "150 kcal" },
      { label: "Fibras", value: "4g" },
    ],
    image: "linear-gradient(135deg, #e3576f, #f1a5b1)",
  },
];

const defaultHighlights = [
  {
    id: "festival-castanhas",
    type: "Oferta",
    title: "Festival das Castanhas",
    subtitle: "Mix premium com 20% OFF",
    description: "Durante toda a semana, leve blends selecionados com desconto especial.",
    cta: "Ver detalhes",
    postId: "festival-castanhas",
    date: "Até 30/05",
    image: "linear-gradient(135deg, #d2a679, #9c6b3a)",
  },
  {
    id: "sabores-do-inverno",
    type: "Evento",
    title: "Sabores do Inverno",
    subtitle: "Degustação de queijos e chás",
    description: "Visite a loja no sábado para uma degustação guiada com harmonizações.",
    cta: "Programação",
    postId: "sabores-do-inverno",
    date: "Sábado · 10h às 13h",
    image: "linear-gradient(135deg, #b6b3e6, #7386d4)",
  },
  {
    id: "desafio-energia",
    type: "Anúncio",
    title: "Desafio Energia Natural",
    subtitle: "Kit café da manhã saudável",
    description: "Monte um kit com granolas, chás e temperos com descontos progressivos.",
    cta: "Montar kit",
    postId: "desafio-energia",
    date: "Semana especial",
    image: "linear-gradient(135deg, #6cbf7f, #2f6f55)",
  },
];

const defaultPosts = [
  {
    id: "festival-castanhas",
    title: "Festival das Castanhas: blends para energia",
    date: "05 Maio 2026",
    category: "Ofertas",
    summary: "Conheça os mixes premium em destaque e saiba como combinar com o dia a dia.",
    content: [
      "Selecionamos castanhas de diferentes regiões do Brasil para entregar sabor e nutrição em cada porção.",
      "Durante o festival, você encontra mixes prontos e também pode montar sua combinação favorita com descontos progressivos.",
      "Pergunte na loja sobre os blends com ervas e especiarias naturais para uma experiência ainda mais intensa.",
    ],
    image: "linear-gradient(135deg, #d2a679, #b37b4c)",
  },
  {
    id: "sabores-do-inverno",
    title: "Sabores do Inverno: degustação guiada",
    date: "02 Maio 2026",
    category: "Eventos",
    summary: "Uma manhã para experimentar queijos artesanais e infusões de ervas.",
    content: [
      "Nosso time preparou uma rota de degustação com queijos de búfala e blends de ervas.",
      "A experiência inclui combinações com chás calmantes e temperos especiais para harmonizar.",
      "Vagas limitadas. Confirme presença pelo WhatsApp da loja.",
    ],
    image: "linear-gradient(135deg, #f0e8d9, #d6c5b1)",
  },
  {
    id: "desafio-energia",
    title: "Desafio Energia Natural",
    date: "28 Abril 2026",
    category: "Anúncios",
    summary: "Monte um kit personalizado para manhãs mais nutritivas.",
    content: [
      "Escolha até 4 itens entre granolas, chás e biscoitos integrais para criar o seu kit.",
      "Clientes do clube Império Natural têm desconto adicional e dicas de preparo.",
      "Consulte um atendente para sugestões de combinações e receitas rápidas.",
    ],
    image: "linear-gradient(135deg, #6cbf7f, #2f6f55)",
  },
];

const safeParse = (value, fallback) => {
  if (!value) {
    return fallback;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

const loadCollection = (key, fallback) => {
  const data = safeParse(localStorage.getItem(key), fallback);
  return Array.isArray(data) ? data : fallback;
};

const saveCollection = (key, items) => {
  localStorage.setItem(key, JSON.stringify(items));
};

export const getProducts = () => loadCollection(STORAGE_KEYS.products, defaultProducts);
export const saveProducts = (items) => saveCollection(STORAGE_KEYS.products, items);
export const getHighlights = () => loadCollection(STORAGE_KEYS.highlights, defaultHighlights);
export const saveHighlights = (items) => saveCollection(STORAGE_KEYS.highlights, items);
export const getPosts = () => loadCollection(STORAGE_KEYS.posts, defaultPosts);
export const savePosts = (items) => saveCollection(STORAGE_KEYS.posts, items);

export const getProductById = (id) => getProducts().find((item) => item.id === id);
export const getPostById = (id) => getPosts().find((item) => item.id === id);

export const getFeaturedProducts = () => getProducts().slice(0, 4);
