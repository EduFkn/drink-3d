const navLinks = [
    {
       id: "cocktails",
       title: "Coqueteis",
    },
    {
       id: "about",
       title: "Sobre nós",
    },
    {
       id: "art",
       title: "Arte",
    },
    {
       id: "contact",
       title: "Contato",
    },
   ];
   
  const cocktailLists = [
  {
    name: "Vinho Tinto do Vale",
    country: "BR",
    detail: "Garrafa 750 ml",
    price: "R$ 49,90",
  },
  {
    name: "Espumante Serra Gaúcha",
    country: "BR",
    detail: "Garrafa 750 ml",
    price: "R$ 89,90",
  },
  {
    name: "Cerveja Puro Malte",
    country: "BR",
    detail: "Long Neck 330 ml",
    price: "R$ 9,90",
  },
  {
    name: "Chope Artesanal",
    country: "BR",
    detail: "Copo 500 ml",
    price: "R$ 14,90",
  },
];

const mockTailLists = [
  {
    name: "Abacaxi Refrescante",
    country: "BR",
    detail: "Copo 300 ml",
    price: "R$ 12,00",
  },
  {
    name: "Maracujá com Hortelã",
    country: "BR",
    detail: "Copo 300 ml",
    price: "R$ 14,00",
  },
  {
    name: "Cítrico Tropical",
    country: "BR",
    detail: "Copo 300 ml",
    price: "R$ 13,00",
  },
  {
    name: "Lavanda Espumante",
    country: "BR",
    detail: "Copo 300 ml",
    price: "R$ 15,00",
  },
];

   
   const profileLists = [
    {
       imgPath: "/images/profile1.webp",
    },
    {
       imgPath: "/images/profile2.webp",
    },
    {
       imgPath: "/images/profile3.webp",
    },
    {
       imgPath: "/images/profile4.webp",
    },
   ];
   
  const featureLists = [
  "Misturas equilibradas na medida certa",
  "Finalização impecável",
  "Sempre gelado e refrescante",
  "Preparado com técnica e estilo",
];

const goodLists = [
  "Ingredientes selecionados à mão",
  "Técnicas exclusivas",
  "Arte da coquetelaria ao vivo",
  "Sabores macerados na hora",
];

const storeInfo = {
  heading: "Onde Nos Encontrar",
  address: "Av. Atlântica, 1234 - Copacabana, Rio de Janeiro - RJ, 22070-000",
  contact: {
    phone: "(21) 98765-4321",
    email: "contato@brcoktail.com.br",
  },
};

const openingHours = [
  { day: "Seg–Qui", time: "11h00 – 00h00" },
  { day: "Sex", time: "11h00 – 02h00" },
  { day: "Sáb", time: "09h00 – 02h00" },
  { day: "Dom", time: "09h00 – 01h00" },
];

   
   const socials = [
    {
       name: "Instagram",
       icon: "/images/insta.webp",
       url: "#",
    },
    {
       name: "X (Twitter)",
       icon: "/images/x.webp",
       url: "#",
    },
    {
       name: "Facebook",
       icon: "/images/fb.webp",
       url: "#",
    },
   ];
   
   const allCocktails = [
  {
    id: 1,
    name: "Caipirinha Clássica",
    image: "/images/drink1.webp",
    title: "Ingredientes Simples, Sabor Marcante",
    description:
      "Preparada com cachaça, limão e açúcar, a caipirinha é um clássico brasileiro fácil de fazer e cheio de personalidade. Um toque de gelo garante refrescância nos dias quentes.",
  },
  {
    id: 2,
    name: "Caipifruta de Framboesa",
    image: "/images/drink2.webp",
    title: "Um Clássico Tropical Que Nunca Sai de Moda",
    description:
      "A caipifruta combina a acidez da framboesa com a suavidade da cachaça e um leve dulçor. Perfeita batida ou servida com gelo para manter-se fresca e vibrante.",
  },
  {
    id: 3,
    name: "Brisa de Lavanda",
    image: "/images/drink3.webp",
    title: "Ingredientes Simples, Sabor Marcante",
    description:
      "Feita com gin, limão-siciliano e um toque floral de lavanda, é leve e aromática. Ideal para um fim de tarde à beira-mar.",
  },
  {
    id: 4,
    name: "Mojito de Curaçau Blue",
    image: "/images/drink4.webp",
    title: "Feito com Carinho, Servido com Amor",
    description:
      "Com hortelã fresca, rum branco e curaçau blue, é um coquetel vibrante e refrescante — perfeito para celebrar ou simplesmente relaxar.",
  },
];

   
   export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
   };